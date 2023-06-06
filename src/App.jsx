import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Root from "./pages/Root";
import ParticalsBackground from "./components/ParticalsBackground";


import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
