import React from "react";
import "../css/offers.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Offers = () => {
  return (
    <>
      <div className="offers">
        <Fade top>
          <div className="brand recognition">
            <div className="circle">
              <img
                className="brand-logo"
                src="/images/icon-brand-recognition.svg"
                alt="brand-logo"
              />
            </div>
            <aside>
              <h1>Brand Recognition</h1>
              <p>
                Build your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content
              </p>
            </aside>
          </div>
        </Fade>
        <Fade>
          <div className="brand record">
            <div className="circle">
              <img
                className="brand-logo"
                src="/images/icon-detailed-records.svg"
                alt="brand-logo"
              />
            </div>
            <aside>
              <h1>Detailed Records</h1>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage in your content helps inform better
                decision.
              </p>
            </aside>
          </div>
        </Fade>
        <Fade bottom>
          <div className="brand custom">
            <div className="circle">
              <img
                className="brand-logo"
                src="/images/icon-fully-customizable.svg"
                alt="brand-logo"
              />
            </div>
            <aside>
              <h1>Fully Customizable</h1>
              <p>
                Improve brand awareness and content discoverability through
                customizable links. Supercharging audience engagement.
              </p>
            </aside>
          </div>
        </Fade>
      </div>
      <Zoom>
        <div className="line"></div>
      </Zoom>
    </>
  );
};

export default Offers;
