import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("h1", { id: "heading" }, "Namsthe React ");

//JSX - It is a syntax extension for JavaScript that looks similar to XML or HTML.
// It allows you to write HTML-like code within JavaScript, making it easier to create React elements.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using tools like Babel.
const heading = <h1 id="heading">Namsthe React from jsx</h1>;
// Here, we are creating a React element using JSX syntax.
// Every element react element is a javascript object.

const ImageJsx = <img src="https://picsum.photos/200/300" alt="Random Image" />;

// root.render(parent);
// root.render(ImageJsx);

//React Component
//This is a functional component in React.

const Title = () => {
  return <h1>Let's Begin ....!!! OMG!</h1>;
};
const HeadingComponent = () => (
  <div>
    <Title />;<h1>Namsthe React from Component</h1>
  </div>
);

// To render the component

root.render(<HeadingComponent />);
