import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Github, { GitHubInfoLoader } from "./Github/Github";
import User from "./User/User";
import Login from "./Login/Login";
import Getstarted from "./Getstarted/Getstarted";

// Define the router using <Route> elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route for "/" */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />}> 
      {/* when I goes on idfetch my logo does'nt shown this is issue to resolve later */}
        <Route path=":idfetch" /> 
      </Route>
      <Route loader={GitHubInfoLoader} path="github" element={<Github />} />
      <Route path="login" element={<Login />} />
      <Route path="getstarted" element={<Getstarted />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
