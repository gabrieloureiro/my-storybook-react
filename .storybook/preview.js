import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered/react";

import "./reset.css";

addDecorator(withInfo);

export const parameters = {
  layout: "fullscreen",
};
