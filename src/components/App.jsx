import React from "react";

import "./assets/css/App.css";
import Intro from "./Intro";
import SignUpCard from "./SignUpCard";

function App() {
  return (
    <div className="App">
      <Intro
        title={"Learn to code by watching others"}
        body={`See how experienced developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think us
          invaluable.`}
      />
      <SignUpCard/>
    </div>
  );
}

export default App;
