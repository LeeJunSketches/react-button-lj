type Config = {
  text: string;
  color: string;
};

type Props = {
  onClick?: () => void;
};

declare type ConfigButton = (
  buttonConfig: Config
) => (props: Props) => JSX.Element;

export { Config, ConfigButton, Props, ConfigButton as default };
