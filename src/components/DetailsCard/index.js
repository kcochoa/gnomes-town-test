import React, { useState, useEffect } from "react";
import pinkImg from "../../assets/img/avatar_rosa-01.png";
import blackImg from "../../assets/img/avatar_negro-01.png";
import grayImg from "../../assets/img/avatar_gris-01.png";
import redImg from "../../assets/img/avatar_rojo-01.png";
import greenImg from "../../assets/img/avatar_verde-01.png";
import { Link } from "react-router-dom";

const DetailsCard = ({
  id,
  name,
  age,
  hairColor,
  professions,
  friends,
  weight,
  height,
}) => {
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
  return (
    <div className="wrapper">
      <div className="profile-card js-profile-card">
        <div className="profile-card__img">
          <img src={imgSrc} alt="profile card" />
        </div>

        <div className="profile-card__cnt js-profile-cnt">
          <div className="profile-card__name">{name}</div>
          <div className="profile-card__txt">
            <p className="pr-2">Professions: </p>
            {professions.map((profession) => (
              <p className="pr-1" key={`job-${profession}`}>{profession}, </p>
            ))}
          </div>
          <div className="profile-card-loc">
            <span className="profile-card-loc__txt">Brastlewark</span>
          </div>

          <div className="profile-card-inf">
            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">{age} years</div>
              <div className="profile-card-inf__txt">Age</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">{Math.round(weight)} lb</div>
              <div className="profile-card-inf__txt">Weight</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">{Math.round(height)} cm</div>
              <div className="profile-card-inf__txt">Height</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">{hairColor}</div>
              <div className="profile-card-inf__txt">Hair Color</div>
            </div>
          </div>

          <div className="profile-card-ctr flex-wrap">
            <h6>Friends:</h6>
            {friends.length > 0 ? (
              friends.map((friend) => (
                <button key={`job-${friend}`} className="profile-card__button button--orange js-message-close">
                  {friend}
                </button>
              ))
            ) : (
              <p>This gnomes is a litle shy!</p>
            )}
          </div>
          <Link to="/all-habitants">See All</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

