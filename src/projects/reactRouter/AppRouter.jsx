import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { User } from "./components/user/User";
import { GitHub, githubInfoLoader } from './components/github/GitHub';



export const AppRounter = () => {
  // const router = createBrowserRouter([
  //     {
  //         path :'/',
  //         element : <Layout />,
  //         children : [{
  //             path : "",
  //             element : <Home />
  //         },
  //         {
  //             path : '/about',
  //             element : <About />
  //         },
  //         {
  //             path : '/contact',
  //             element : < Contact />
  //         }
  //     ]
  //     }
  // ])

  // OR

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="*" element="This Page in not Available" />
        <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
