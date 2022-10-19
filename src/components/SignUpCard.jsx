import React from 'react';

import styles from "./assets/css/SignUpCard.module.css";

function SignUpCard(){
    return (
      <div className={styles["card-wrapper"]}>
        <div className={styles["sign-up-suggestion"]}>
          <p>
            <strong>Try it free 7 days</strong> then $20/mo.thereafter
          </p>
        </div>
        <form className={styles["sign-up-card"]} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button>Claim youre free trial</button>
          <p>
            By clicking the button, you are agreeing to out
            <span> Terms and services</span>
          </p>
        </form>
      </div>
    );
}

export default SignUpCard;