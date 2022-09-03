const rootEl = document.querySelector("#root");

const greetEl = React.createElement(
    "div", { className: "greeting" },
    "Hello, React!"
);

ReactDOM.render(greetEl, rootEl);