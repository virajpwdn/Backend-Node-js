import React, { useEffect, useState } from "react";
import "./feedstyle.css";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/profile", {
        headers: {
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="profile-img">{/* <img src="" alt="" /> */}</div>
        <h2 className="username">username</h2>
        <div className="post-container">
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </div>
    </>
  );
};

export default Feed;
