import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think us
          invaluable.
        </p>
      </div>
      <div className="card-wrapper">
        <div className="sign-up-suggestion">
          <p>
            <strong>Try it free 7 days</strong> then $20/mo.thereafter
          </p>
        </div>
        <form className="sign-up-card" onSubmit={(e) => e.preventDefault()}>
          <input type="text" />
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <button>Claim youre free trial</button>
          <p>
            By clicking the button, you are agreeing to out
            <span>Terms and services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
