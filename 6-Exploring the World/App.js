import ReactDOM from "react-dom/client";
import "./index.css";
import Headers from "./src/Components/Header";
import Body from "./src/Components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
