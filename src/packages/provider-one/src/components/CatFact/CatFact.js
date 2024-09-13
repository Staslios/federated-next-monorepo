import React, { useState } from "react";
import style from "./cat-fact.module.scss"


const CatFact = () => {

  const [catFact, setCatFact] = useState("");

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setCatFact(data.fact);
    }
    catch (error) {
      console.error("Error fetching cat fact:", error);
      setCatFact("Sorry, something went wrong. Try again!");
    }
  };

  return <div className={style.container}>
    <h1>Random Cat Fact Generator</h1>
    <p>Click the button to get a random cat fact. 🐱</p>
    <button onClick={getCatFact} className={style.button}>
      Get Random Cat Fact
    </button>
    {catFact && (
      <div className={style.factContainer}>
        <h3>Here's your cat fact:</h3>
        <p>{catFact}</p>
      </div>
    )}
  </div>
};

export default CatFact