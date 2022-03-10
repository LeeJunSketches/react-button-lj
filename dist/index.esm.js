import { jsx } from 'react/jsx-runtime';

const Button = (props) => {
    const style = {
        color: props.color,
        border: `2px solid ${props.color}`,
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: "white",
    };
    return (jsx("button", Object.assign({ className: "button-custom-comp", style: style, onClick: props.onClick }, { children: "My Button!!" })));
};

const configButton = (buttonConfig) => (props) => Button(Object.assign(Object.assign({}, buttonConfig), props));

export { configButton, configButton as default };
