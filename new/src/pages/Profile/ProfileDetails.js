import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
import Spinner from "../../components/Spinner/Spinner";
import "./Profiles.css";
import { useQuery } from "@apollo/client";
import { PROFILES_DETAILS_QUERY } from "./../../components/Queries//queries";

const ProfileDetails = () => {
  const { loading, error, data } = useQuery(PROFILES_DETAILS_QUERY);

  const displayProfileDetails = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  if (loading) return <Spinner />;
  if (error) return "Error happened";
  return <ProfileList data={data} />;
};

export default ProfileDetails;
