import React  from "react";
import "./Card.css";
const Card = ({ data }) => {
  return (
    <div>
      <div className="container">
        {data.map(({ id, title, desc, image }) => {
          return (
            <div key={id} className="map-div">
              <h1 className="h1"> {title} </h1>
              <img src={image} alt="" />
              <p className="p"> {desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
