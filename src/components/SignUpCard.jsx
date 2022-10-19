import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

import { isEmpty } from "../utils/isEmpty";

import styles from "./assets/css/SignUpCard.module.css";

function SignUpCard() {
  const signUpInputs = {
    firstName: useInput(""),
    lastName: useInput(""),
    email: useInput(""),
    password: useInput(""),
  };

  const [fnameMessage, setFNameMessage] = useState("");
  const [lnameMessage, setLNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  function checkFirstName() {
    if (isEmpty(signUpInputs.firstName.value)) {
      setFNameMessage("First Name cannot be empty");
    } else {
      setFNameMessage("");
    }
  }

  function checkLastName() {
    if (isEmpty(signUpInputs.lastName.value)) {
      setLNameMessage("Last name cannot be empty");
    } else {
      setLNameMessage("");
    }
  }

  function checkEmail() {
    if (isEmpty(signUpInputs.email.value)) {
      setEmailMessage("Looks like this is not an email");
    } else {
      setEmailMessage("");
    }
  }

  function checkPassword() {
    if (isEmpty(signUpInputs.password.value)) {
      setPasswordMessage("Password cannot be empty");
    } else {
      setPasswordMessage("");
    }
  }

  function sendSignUpForm(e) {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
  }

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["sign-up-suggestion"]}>
        <p>
          <strong>Try it free 7 days</strong> then $20/mo.thereafter
        </p>
      </div>
      <form className={styles["sign-up-card"]} onSubmit={sendSignUpForm}>
        <div className={`${styles["sign-up-card-item"]}`}>
          <input
            type="text"
            placeholder="First name"
            {...signUpInputs.firstName}
          />
          <label>{fnameMessage}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <input
            type="text"
            placeholder="Last name"
            {...signUpInputs.lastName}
          />
          <label>{lnameMessage}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <input
            type="email"
            placeholder="Email address"
            {...signUpInputs.email}
          />
          <label>{emailMessage}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <input
            type="password"
            placeholder="Password"
            {...signUpInputs.password}
          />
          <label>{passwordMessage}</label>
        </div>
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
