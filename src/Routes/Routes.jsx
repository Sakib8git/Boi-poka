import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPg from "../Pages/ErrorPages/ErrorPg";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetail/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPg></ErrorPg>,
    children: [
      {
        index: true,
        loader: ()=> fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookdetails/:id",
        loader: ()=> fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
