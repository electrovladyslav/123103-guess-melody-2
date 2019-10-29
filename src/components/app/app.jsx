import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GenreQuestionScreen from "../genre-screen/genre-screen.jsx";
import ArtistQuestionScreen from "../artist-screen/artist-screen.jsx";
import WinScreen from "../win-screen/win-screen.jsx";
import Footer from "../footer/footer.jsx";

const App = (props) => {
  const {time, mistakesCount, questions} = props;
  const [questionNumber, setQuestion] = useState(-1);

  const handleUserAnswer = (answers) => {
    debugger;
    setQuestion(questionNumber + 1);
    // eslint-disable-next-line no-console
    console.log(answers);
  };

  useEffect(() => {
    if (questionNumber > questions.length) {
      setQuestion(-1);
    }
  });

  const renderScreen = (screenIndex) => {
    if (screenIndex === -1) {
      return (
        <WelcomeScreen
          time={time}
          mistakesCount={mistakesCount}
          startGame={handleUserAnswer}
        />
      );
    } else if (screenIndex === questions.length) {
      return <WinScreen restartGame={handleUserAnswer}/>;
    }

    const currentQuestion = questions[screenIndex];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreQuestionScreen
            screenIndex={screenIndex}
            question={currentQuestion}
            onAnswer={handleUserAnswer}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            screenIndex={screenIndex}
            question={currentQuestion}
            onAnswer={handleUserAnswer}
          />
        );
    }

    return null;
  };

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

        {renderScreen(questionNumber)}
      </main>
      <Footer />
    </React.Fragment>
  );
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape(
          {
            type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
            genre: PropTypes.oneOf([`rock`, `pop`, `jazz`, `folk`]).isRequired,
            answers: PropTypes.array.isRequired,
          }.isRequired
      )
  ),
};

export default App;
