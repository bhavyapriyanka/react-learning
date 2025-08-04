// Creating a html element using react

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React !!!"
// );
// console.log(heading); // This will log the React element (object) to the console
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//<div id="parent">
//   <div id="child">
//     <h1>I am H1 tag</h1>
//   </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]) // It will create a sybiling h2 tags . Inorder to create a child element , we need to pass an array
);

// As the code is becoming more complex, we can use JSX syntax to make it more readable

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
