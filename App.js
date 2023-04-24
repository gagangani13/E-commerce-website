import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import STORE from "./Components/Store/STORE";
import HOME from "./Components/Home/HOME";
import ABOUT from "./Components/About/ABOUT";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Router = createBrowserRouter([
  { path: "/STORE", element: <STORE /> },
  { path: "/", element: <HOME /> },
  {path: "/ABOUT", element: <ABOUT /> }
]);
const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
      <Footer/>
    </>
  );
};

export default App;
