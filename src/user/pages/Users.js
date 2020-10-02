import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "user1",
      name: "Vitaliy",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
