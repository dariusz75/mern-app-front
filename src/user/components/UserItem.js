import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Card from "../../shared/components/uIElements/Card";
import Avatar from "../../shared/components/uIElements/Avatar";

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>

          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
