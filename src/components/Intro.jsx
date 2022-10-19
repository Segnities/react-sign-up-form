import React from "react";

import styles from "./assets/css/Intro.module.css";

function Intro({ title, body }) {
  return (
    <div className={styles['intro']}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}


export default Intro;
