import axios from "axios";
import React, { useEffect, useState } from "react";
import './profilestyle.css'
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if(!token) navigate("/login");

    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: "bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="profile-img"><img src={data.message?.photo || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww"} alt="" /></div>
        <h2 className="username">{data.message?.username}</h2>
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

export default Profile;
