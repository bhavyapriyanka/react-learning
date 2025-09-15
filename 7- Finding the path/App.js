import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./src/Components/About";
import Contactus from "./src/Components/contactUs";
import Error from "./src/Components/Error";
import ResturantMenu from "./src/Components/ResturantMenu";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* If my path ="/" then  */}
      {/* <Body /> */}
      {/* If my path ="/about" then  */}
      {/* <About /> */}
      {/* If my path ="/contactus" then  */}
      {/*<Contactus /> */}
      {/* Inorder to this easy react-router is providing another keyword called outlet  */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
