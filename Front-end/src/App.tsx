import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";

const App = () => {
  return <div>
    <RouterProvider router={Router}/>
  </div>;
};

export default App;
