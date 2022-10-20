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
    placeholder: "Password",
    message: "Password cannot be empty",
    isCorrect: true,
  });

  function checkFirstName() {
    if (isEmpty(firstName.value)) {
      setFirstName({ ...firstName, isCorrect: false });
    } else {
      setFirstName({ ...firstName, isCorrect: true, value: "" });
    }
  }

  function checkLastName() {
    if (isEmpty(lastName.value)) {
      setLastName({ ...lastName, isCorrect: false });
    } else {
      setLastName({ ...lastName, isCorrect: true, value: "" });
    }
  }

  function checkEmail() {
    if (isEmpty(email.value)) {
      setEmail({
        ...email,
        isCorrect: false,
        placeholder: "email@example.com",
      });
    } else {
      setEmail({
        ...email,
        isCorrect: true,
        placeholder: "Email Address",
        value: "",
      });
    }
  }

  function checkPassword() {
    if (isEmpty(password.value)) {
      setPassword({ ...password, isCorrect: false });
    } else {
      setPassword({ ...password, isCorrect: true, value: "" });
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
      <form className={`${styles["sign-up-card"]}`} onSubmit={sendSignUpForm}>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="text"
              placeholder={firstName.placeholder}
              value={firstName.value}
              onChange={(e) =>
                setFirstName({
                  ...firstName,
                  value: e.target.value,
                  isCorrect: true,
                })
              }
              className={
                password.isCorrect
                  ? ``
                  : `${styles["error-input-border"]} ${styles["error-placeholder"]}`
              }
            />
            {firstName.isCorrect ? (
              <div className={styles["unimage"]}></div>
            ) : (
              <img src={ErrorIcon} alt="" />
            )}
          </div>
          <label>{firstName.isCorrect ? null : firstName.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="text"
              placeholder={lastName.placeholder}
              value={lastName.value}
              onChange={(e) =>
                setLastName({
                  ...lastName,
                  value: e.target.value,
                  isCorrect: true,
                })
              }
              className={
                password.isCorrect
                  ? ``
                  : `${styles["error-input-border"]} ${styles["error-placeholder"]}`
              }
            />
            {lastName.isCorrect ? (
              <div className={styles["unimage"]}></div>
            ) : (
              <img src={ErrorIcon} alt="" />
            )}
          </div>
          <label>{lastName.isCorrect ? null : lastName.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="email"
              placeholder={email.placeholder}
              value={email.value}
              onChange={(e) =>
                setEmail({ ...email, value: e.target.value, isCorrect: true })
              }
              className={
                password.isCorrect
                  ? ``
                  : `${styles["error-input-border"]} ${styles["error-placeholder"]}`
              }
            />
            {email.isCorrect ? (
              <div className={styles["unimage"]}></div>
            ) : (
              <img src={ErrorIcon} alt="" />
            )}
          </div>
          <label>{email.isCorrect ? null : email.message}</label>
        </div>
        <div className={`${styles["sign-up-card-item"]}`}>
          <div className={`${styles["card-item-input"]}`}>
            <input
              type="password"
              placeholder={password.placeholder}
              value={password.value}
              onChange={(e) =>
                setPassword({
                  ...password,
                  value: e.target.value,
                  isCorrect: true,
                })
              }
              className={
                password.isCorrect
                  ? ``
                  : `${styles["error-input-border"]} ${styles["error-placeholder"]}`
              }
            />
            {password.isCorrect ? (
              <div className={styles["unimage"]}></div>
            ) : (
              <img src={ErrorIcon} alt="" />
            )}
          </div>
          <label>{password.isCorrect ? null : password.message}</label>
        </div>
        <button className={styles["w-95"]}>Claim youre free trial</button>
        <p>
          By clicking the button, you are agreeing to out
          <span> Terms and services</span>
        </p>
      </form>
    </div>
  );
}

export default SignUpCard;
