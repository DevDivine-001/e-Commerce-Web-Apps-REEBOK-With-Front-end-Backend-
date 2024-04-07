import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";
import React from "react"
import AOS from "aos"
import "aos/dist/aos.css";

const App = () => {
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 1500,
        easing: "ease-in-sine",
        delay: 250,
      });
      AOS.refresh();
    }, []);
  return <div>
    <RouterProvider router={Router}/>
  </div>;
};

export default App;
