import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SetUserLoginStatus = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const u = user;
  console.log(u);
  const isl = isLoading;
  console.log(isl);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default SetUserLoginStatus;