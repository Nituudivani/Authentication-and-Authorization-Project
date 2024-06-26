import React from "react";
import "../Home/Home.css";
// Home.css ni file ne import karva
import "bootstrap/dist/css/bootstrap.css";
// boostrap libray

function Home() {
  const img = require("../../image/img.jpg");

  return (
    <div>
      <img src={img} alt="" height="100%" width="100%" />
    </div>
  );
}

export default Home;
