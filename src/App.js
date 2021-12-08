import React from "react";
import InstaFeeds from "./Components/InstaFeeds";

import "./App.css";

const App = () => {
  return (
    <>
      <header className="App-header" style={{ textAlign: "center" }}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
      {/*
      <InstaFeeds
        token="IGQVJWckVjRWdOSGMwUkpYWjdRZAW9pRnlFYjJHRlc1bjZA1VXlnNlEtTnFTMzJEWnAzdXBWUlhPakpXNS12T2RoSnVmbl9vbnAySTdkSnV5amtnUDhzaFRGaEVSVU1QWG9acERISDZAR"
        limit={4}
      />
      */}
    </>
  );
};

export default App;
