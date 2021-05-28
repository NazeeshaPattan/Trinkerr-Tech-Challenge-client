import React, { useState } from "react";
import { useSelector } from "react-redux";
// import TinderCard from '../react-tinder-card/index'

import TinderCard from "react-tinder-card";
const pics = [
  {
    name: "1",
    url: "http://getdrawings.com/free-icon-bw/one-icon-3.png",
  },
  {
    name: "2",
    url: "http://getdrawings.com/free-icon-bw/free-shirt-icon-9.png",
  },
  {
    name: "3",
    url: "http://getdrawings.com/free-icon-bw/serial-number-icon-19.png",
  },
  {
    name: "4",
    url: "http://getdrawings.com/free-icon-bw/serial-number-icon-18.png",
  },
  {
    name: "5",
    url: "http://getdrawings.com/free-icon-bw/number-one-icon-17.png",
  },
];

function Simple() {
  const user = useSelector((state) => state.user);
  const photos = pics;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="container text-center">
      <h1>{"Logged In"}</h1>
      <div className="cardContainer">
        {photos.map((photo) => (
          <TinderCard
            className="swipe"
            key={photo.name}
            onSwipe={(dir) => swiped(dir, photo.name)}
            onCardLeftScreen={() => outOfFrame(photo.name)}
          >
            <div className="card p-3 m-4" >
              <img src={photo.url} width="40%" height="50%" alt="" className="mx-auto" />
              <h3>{photo.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;
