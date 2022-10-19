import React from "react";

import "./assets/css/App.css";
import Intro from "./Intro";

function App() {
  return (
    <div className="App">
      <Intro
        title={"Learn to code by watching others"}
        body={`See how experienced developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think us
          invaluable.`}
      />
      <div className="card-wrapper">
        <div className="sign-up-suggestion">
          <p>
            <strong>Try it free 7 days</strong> then $20/mo.thereafter
          </p>
        </div>
        <form className="sign-up-card" onSubmit={(e) => e.preventDefault()}>
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
    </div>
  );
}

export default App;
