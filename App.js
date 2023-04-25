import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import STORE from "./Components/Store/STORE";
import HOME from "./Components/Home/HOME";
import ABOUT from "./Components/About/ABOUT";
import CONTACT from "./Components/Contact/CONTACT";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Router = createBrowserRouter([
  { path: "/STORE", element: <STORE /> },
  { path: "/", element: <HOME /> },
  {path: "/ABOUT", element: <ABOUT /> },
  {path:'/CONTACT',element:<CONTACT/>}
]);
const App = () => {
  return (
    <>
      <Header />
      <main style={{minHeight:'90vh'}}>
        <RouterProvider router={Router} />
      </main>
      <Footer/>
    </>
  );
};

export default App;
