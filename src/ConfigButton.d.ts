export type Config = {
  text: string;
  color: string;
};

export type Props = {
  onClick?: () => void;
};

export declare type ConfigButton = (
  buttonConfig: Config
) => (props: Props) => JSX.Element;

export default ConfigButton;
