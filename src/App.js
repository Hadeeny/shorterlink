import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Submain from "./Components/Submain";
import "./css/style.css";

const App = () => {
  const [links, setLinks] = useState([]);

  const changeCopy = (id) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, copy: !link.copy } : link))
    );
  };

  const onUrl = (url) => {
    const id = Date.now();
    const newLinks = { ...url, id };
    setLinks([...links, newLinks]);
  };

  return (
    <>
      <Header links={links} />
      <main>
        <Main links={links} onCopy={changeCopy} onUrl={onUrl} />
        <Submain />
      </main>
      <Footer />
    </>
  );
};

export default App;
