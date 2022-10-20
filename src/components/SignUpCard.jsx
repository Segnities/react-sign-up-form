import React, { useState } from "react";

import ErrorIcon from "./assets/img/icon-error.svg";

import { isEmpty } from "../utils/isEmpty";

import styles from "./assets/css/SignUpCard.module.css";

function SignUpCard() {
  const [firstName, setFirstName] = useState({
    value: "",
    placeholder: "First Name",
    message: "First Name cannot be empty",
    isCorrect: true,
  });
  const [lastName, setLastName] = useState({
    value: "",
    placeholder: "Last Name",
    message: "Last Name cannot be empty",
    isCorrect: true,
  });
  const [email, setEmail] = useState({
    value: "",
    placeholder: "Email Address",
    message: "Looks like not a email address",
    isCorrect: true,
  });
  const [password, setPassword] = useState({
    value: "",
    placeholder: "Email Address",
    message: "Password cannot be empty",
    isCorrect: true,
  });

  function checkFirstName() {
    if (isEmpty(firstName.value)) {
      setFirstName({ ...firstName, isCorrect: false });
    } else {
      setFirstName({ ...firstName, isCorrect: true });
    }
  }

  function checkLastName() {
    if (isEmpty(lastName.value)) {
      setLastName({ ...lastName, isCorrect: false });
    } else {
      setLastName({ ...lastName, isCorrect: true });
    }
  }

  function checkEmail() {
    if (isEmpty(email.value)) {
      setEmail({ ...email, isCorrect: false });
    } else {
      setEmail({ ...email, isCorrect: true });
    }
  }

  function checkPassword() {
    if (isEmpty(password.value)) {
      setPassword({ ...password, isCorrect: false });
    } else {
      setPassword({ ...password, isCorrect: true });
    }
  }

  function isInputFieldCorrect(iStyles, eStyles) {
    if (
      firstName.isCorrect === true &&
      lastName.isCorrect === true &&
      email.isCorrect === true &&
      password.isCorrect === true
    ) {
      return iStyles;
    }
    return eStyles;
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
      <form
        className={`${styles["sign-up-card"]} ${isInputFieldCorrect(
          styles["card-right-padding-correct"],
          styles["card-right-padding-incorrect"]
        )}`}
        onSubmit={sendSignUpForm}
      >
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="text"
              placeholder="First name"
              value={firstName.value}
              onChange={(e) =>
                setFirstName({ ...firstName, value: e.target.value })
              }
            />
            {firstName.isCorrect ? null : <img src={ErrorIcon} alt="" />}
          </div>
          <label>{firstName.isCorrect ? null : firstName.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="text"
              placeholder="Last name"
              value={lastName.value}
              onChange={(e) =>
                setLastName({ ...lastName, value: e.target.value })
              }
            />
            {lastName.isCorrect ? null : <img src={ErrorIcon} alt="" />}
          </div>
          <label>{lastName.isCorrect ? null : lastName.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="email"
              placeholder="Email address"
              value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
            />
            {email.isCorrect ? null : <img src={ErrorIcon} alt="" />}
          </div>
          <label>{email.isCorrect ? null : email.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
            />
            {password.isCorrect ? null : <img src={ErrorIcon} alt="" />}
          </div>
          <label>{password.isCorrect ? null : password.message}</label>
        </div>
        <button className={isInputFieldCorrect("", styles["w-95"])}>Claim youre free trial</button>
        <p>
          By clicking the button, you are agreeing to out
          <span> Terms and services</span>
        </p>
      </form>
    </div>
  );
}

export default SignUpCard;
