import React from "react";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.main_Bg}>
        <h2>Be The Reason Someone Smiles Today!</h2>
      </div>
      
    </div>
  );
}

export default Home;
