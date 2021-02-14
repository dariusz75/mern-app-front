import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Dariusz Franczak",
      image:
        "https://avatars.githubusercontent.com/u/12503580?s=460&u=bf93f8321c93cc6ba143903a7c0ee53cdaefb5f7&v=4",
      places: 3,
    },
  ];

  return <UserList users={USERS} />;
};

export default Users;
