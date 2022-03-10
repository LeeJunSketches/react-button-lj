import React from "react";
import { storiesOf } from "@storybook/react";
import configButton from "../src";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const GreenButton = configButton({ text: "Click green", color: "green" });
  const RedButton = configButton({ text: "Click red", color: "red" });
  const onClick = () => console.log("Clicked!!");

  return (
    <div>
      <GreenButton onClick={onClick} />
      <RedButton onClick={onClick} />
    </div>
  );
});
