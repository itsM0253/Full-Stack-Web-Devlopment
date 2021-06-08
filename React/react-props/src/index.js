import React from "react";
import ReactDOM from "react-dom";

// to represent different Cards for celeberitys
// e.g.
// 1. Beyonce
// 2. Kobe
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Kobe Bryant"
      img="https://static01.nyt.com/images/2020/02/02/sports/02kobe-essay-lede/merlin_93708212_ff16a83c-391b-4b25-a4d5-77eaf0cbbb20-superJumbo.jpg"
      tel="+123 456 789"
      email="kobe24@laker.com"
    />
  </div>,
  document.getElementById("root")
);
