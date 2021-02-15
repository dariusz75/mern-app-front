import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856959 },
    creatorUi: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856959 },
    creatorUi: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList places={DUMMY_PLACES} />;
};

export default UserPlaces;
