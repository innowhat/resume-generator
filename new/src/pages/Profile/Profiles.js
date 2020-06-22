import React from "react";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
import ProfileList from "../Profile/ProfileList/ProfileList";
import Spinner from "../../components/Spinner/Spinner";
import "./Profiles.css";
import { useQuery } from "@apollo/client";
import { PROFILES_QUERY } from "./../../components/Queries/queries";

const Profiles = () => {
  const { loading, error, data } = useQuery(PROFILES_QUERY);
  console.log(data);
  if (loading) return <Spinner />;
  if (error) return "Error happened";
  console.log(data.profiles[1]);
  return <ProfileList data={data} />;
};

export default Profiles;
