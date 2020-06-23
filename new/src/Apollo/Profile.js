import React from "react";
import { useQuery } from "@apollo/client";
import { USER_PROFILES } from "./queries";
import Loading from "./../components/Spinner/Spinner";

const Profile = () => {
  const { loading, error, data } = useQuery(USER_PROFILES);
  console.log(data);
  if (loading) return <Loading />;
  if (error) return "Error happened";
  console.log(data.profiles[1]);
  return (
    <div>
      <h3>Profile</h3>

      {data.profiles.map((p) => (
        <div key={p.profileId}>
          {p.title} {p.description}
        </div>
      ))}
    </div>
  );
};

export default Profile;
