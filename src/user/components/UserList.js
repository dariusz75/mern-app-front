import React from "react";

import "./UserList.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  const { users } = props;
  if (!users.length) {
    return <h2>No Users found</h2>;
  }
  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
