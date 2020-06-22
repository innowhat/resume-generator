import React from "react";
import "./ProfileItem.css";

const profileItem = (props) => (
  <li key={props.profileId} className="profiles__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    <div>
      <button className="btn">View Details</button>
    </div>
  </li>
);

export default profileItem;
