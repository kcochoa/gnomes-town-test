import React, { useState, useEffect } from "react";
import pinkImg from "../../assets/img/avatar_rosa-01.png";
import blackImg from "../../assets/img/avatar_negro-01.png";
import grayImg from "../../assets/img/avatar_gris-01.png";
import redImg from "../../assets/img/avatar_rojo-01.png";
import greenImg from "../../assets/img/avatar_verde-01.png";

const HabitantCard = ({ id, name, age, weight, height, hairColor, handleClickCallback }) => {
  const [imgSrc, setImgSrc] = useState("grey");

  useEffect(() => {
    chooseAvatar(hairColor);
  }, [hairColor]);

  const chooseAvatar = (hairColor) => {
    switch (hairColor) {
      case "Pink":
        setImgSrc(pinkImg);
        break;
      case "Black":
        setImgSrc(blackImg);
        break;
      case "Red":
        setImgSrc(redImg);
        break;
      case "Green":
        setImgSrc(greenImg);
        break;
      default:
        setImgSrc(grayImg);
        break;
    }
  };

  const handleClick = ()=>{
    handleClickCallback(id);
  }
  return (
    <div data-testid={`habitant-card-${id}`}  className="clash-card barbarian h-100" onClick={handleClick}>
      <div className="clash-card__image clash-card__image--barbarian">
        <img
          src={imgSrc}
          alt="barbarian"
        />
      </div>
      <div className="clash-card__unit-name">{name}</div>
      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">
            {age}
          </div>
          <div className="stat-value">Years</div>
        </div>

        <div className="one-third">
          <div className="stat">{Math.round(height)} cm</div>
          <div className="stat-value">Height</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">{Math.round(weight)} lb</div>
          <div className="stat-value">Weight</div>
        </div>
      </div>
    </div>
  );
};

export default HabitantCard;
