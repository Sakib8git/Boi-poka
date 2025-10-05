import React from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const dataBooks = useLoaderData();
  // console.log(dataBooks);
  return (
    <div>
      <Banner></Banner>
      <Books dataBooks={dataBooks}></Books>
    </div>
  );
};

export default Home;
