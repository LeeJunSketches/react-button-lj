import Button from "./components/Button";
import { ConfigButton, Config, Props } from "./ConfigButton.d";

export const configButton: ConfigButton =
  (buttonConfig: Config) => (props: Props) =>
    Button({ ...buttonConfig, ...props });

export default configButton;
