import React from "react";

import "./PlaceForm.css";
import Input from "../../shared/components/formElements/Input";
import Button from "../../shared/components/formElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import useForm from "../../shared/hooks/useForm";

const NewPlace = () => {
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

  const [formState, inputHandler] = useForm(initialInputs, false);

  const addPlaceSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form data is:", formState.inputs);
    //implement the method to send it to the backend
  };

  return (
    <form className="place-form" onSubmit={addPlaceSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please provide a title."
        onInput={inputHandler}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Min 5 characters required.."
        onInput={inputHandler}
      ></Input>
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please provide the address."
        onInput={inputHandler}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        ADD
      </Button>
    </form>
  );
};

export default NewPlace;
