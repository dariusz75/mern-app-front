import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PlaceForm.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import useForm from "../../shared/hooks/useForm";

import Input from "../../shared/components/formElements/Input";
import Button from "../../shared/components/formElements/Button";
import Card from "../../shared/components/uIElements/Card";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building 111",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856959 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 222",
    description: "One of the most famous sky scrappers in the world",
    imageUrl:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856959 },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const initialInputs = {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
  };

  const [formState, inputHandler, setFormData] = useForm(initialInputs, false);

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
          address: {
            value: identifiedPlace.address,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log("formState is", formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Place not found</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    formState.inputs.title.value && (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Descriptions"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Min 5 characters required"
          onInput={inputHandler}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.isValid}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please provide the address."
          onInput={inputHandler}
          value={formState.inputs.address.value}
          valid={formState.inputs.address.isValid}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
