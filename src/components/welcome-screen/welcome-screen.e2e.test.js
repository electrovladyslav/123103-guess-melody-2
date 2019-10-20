import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WellcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

const onStartClick = jest.fn();

it(`On click on start button handler called`, () => {
  const app = shallow(
      <WellcomeScreen startGame={onStartClick} time={0} mistakesCount={1} />
  );

  const startBtn = app.find(`.welcome__button`);
  startBtn.simulate(`click`, {preventDefault() {}});
  expect(onStartClick).toHaveBeenCalledTimes(1);
});
