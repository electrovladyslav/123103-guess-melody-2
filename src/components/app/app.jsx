import React from "react";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import Footer from "../footer/footer.jsx";

const App = () => {
  // eslint-disable-next-line no-alert
  const startGame = () => alert(`Lets start!`);

  return (
    <React.Fragment>
      <main className="app">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{position: `absolute`, left: -1200 + `em`}}>
          <filter id="blur">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"></feGaussianBlur>
            <feOffset dx="0" dy="0"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </svg>

        <WelcomeScreen time={50} mistakesCount={93} startGame={startGame} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
