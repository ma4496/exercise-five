import React from "react";

function UserProfile({ userInformation }) {
  return (
    <div className="PageWrapper">
      <h1>User Profil</h1>
      <p>Email: {userInformation.email}</p>
    </div>
  );
}

export default UserProfile;
