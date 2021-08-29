import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";
import "../css/main.css";
import Offers from "./Offers";
import { urlRegex, fetchWithTimeout } from "../utils/script";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Main = ({ links, onCopy, onUrl }) => {
  const [longUrl, setLongUrl] = useState("");
  const [copy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputCheck, setInputCheck] = useState("");

  const endPoint = `https://api.shrtco.de/v2/shorten`;

  const checkUrl = async (e) => {
    e.preventDefault();
    const requestTimeout = 25000;
    if (urlRegex.test(longUrl) === false) {
      alert("please enter a valid url");
      setInputCheck("Invalid url");
    } else {
      try {
        setLoading(true);
        const response = await fetchWithTimeout(`${endPoint}?url=${longUrl}`, {
          timeout: requestTimeout,
        });
        const data = await response.json();
        console.log(data.result);
        setLoading(false);
        onUrl({ longUrl, shortUrl: data.result.full_short_link, copy });
        setLongUrl("");
      } catch (error) {
        if (error.name === "AbortError") {
          setLoading(false);
          alert("Please check internet your connection and try again");
        }
      }
    }
  };

  const override = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 110px;
  `;

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div className="input-box">
            <form>
              <input
                type="text"
                value={longUrl}
                onChange={(e) => {
                  setLongUrl(e.target.value);
                }}
                placeholder="Shorten a link here..."
              />
              <button onClick={checkUrl}>Shorten it</button>
            </form>
          </div>
          <PropagateLoader
            css={override}
            size={20}
            loading={loading}
            color={"#6ADDDD"}
          />
          <div className="url-box">
            {links.map((link) => (
              <div className="urls" key={link.id}>
                <div className="item-1">
                  <a href={link.longUrl}>{link.longUrl}</a>
                </div>
                <div className="item-2">
                  <a href={link.shortUrl}>{link.shortUrl}</a>
                  <CopyToClipboard
                    text={link.shortUrl}
                    onCopy={() => onCopy(link.id)}
                  >
                    <button className={link.copy ? "copied" : ""}>
                      {link.copy ? "Copied!" : "Copy"}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
          </div>
          <p>{inputCheck}</p>
          <div className="info">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with
              <br /> our advanced dashboard.
            </p>
          </div>
          <Offers />
        </div>
      </div>
    </>
  );
};

export default Main;
