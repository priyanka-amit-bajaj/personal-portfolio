/*
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Scrollbar from "./components/UI/Scrollbar";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className={styles.appContainer}>
      <Navbar />
      {loading ? <p>Loading...</p> : <div className={styles.appGrid}><Sidebar /><Portfolio /><Projects /></div>}
    </div>
  );
}

export default App;
*/


import React from "react";
import PortfolioUI from "./components/PortfolioUI";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <PortfolioUI />
    </div>
  );
}

export default App;
