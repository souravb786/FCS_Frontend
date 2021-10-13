import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";

import "../Styles/Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="home-header">
        <Header />
      </div>
      {/* Banner */}
      <div className="home-banner">
        <Banner />
        {/* <Banner />
                <Banner /> */}
      </div>
      <div className="product">
        <ProductCard />
      </div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
  );
}

export default Home;
