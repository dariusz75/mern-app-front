import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/uIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  const { places } = props;

  if (!places.length) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found</h2>
        </Card>
        <button>Share new place</button>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {places.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
