import React from "react";

import "./Input.css";

const Input = (props) => {
  const { id, label, type, placeholder, rows } = props;

  const element =
    props.element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );

  return (
    <div className="Form-control">
      <label htmlFor={id}>{label}</label>
      {element}
    </div>
  );
};

export default Input;
