import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profilestyle.css";
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
  console.log(data?.user?.posts[0].media);
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          <img
            src={
              data?.user?.photo ||
              "https://imgs.search.brave.com/5cAi-jXDh0PdCGuh2vvsggwMUWvGlmTFmbCQ7jYJ9OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
            }
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2 className="username">{data?.user?.username}</h2>
          <p className="bio">{data?.user?.bio || "No bio available"}</p>
        </div>
      </div>

      <div className="post-container">
        {data?.user?.posts?.map((post, index) => (
          <div key={index} className="post">
            <img src={post.media} alt={`Post ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
