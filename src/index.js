import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import {questions, settings} from "./mocks/questions";

const init = () => {
  ReactDOM.render(
      <App
        questions={questions}
        time={settings.time}
        mistakesCount={settings.mistakesCount}
      />,
      document.getElementById(`root`)
  );
};

init();
