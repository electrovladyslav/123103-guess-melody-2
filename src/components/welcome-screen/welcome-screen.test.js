import React from "react";
import renderer from "react-test-renderer";

import WelcomeScreen from "./welcome-screen.jsx";

it(`WelcomeScreen component renders correctly`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          time={0}
          mistakesCount={1}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
