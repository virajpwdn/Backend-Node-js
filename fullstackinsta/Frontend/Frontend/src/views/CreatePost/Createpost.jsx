import React, { useState } from "react";
import "./createpoststyle.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Createpost = () => {
  const [media, setMedia] = useState("");
  const [caption, setCaption] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const postSubmitHandler = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:3000/post/create",
      {
        media,
        caption,
      },
      { headers: { Authorization: `bearer ${token}` } }
    ).then((res)=>{
        console.log(res);
        navigate("/profile")

    }).catch((err)=>{
        console.log(err);
    });
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={postSubmitHandler}>
          <label htmlFor="media">Media</label>
          <input
            id="media"
            type="text"
            placeholder="media url"
            value={media}
            onChange={(e) => {
              setMedia(e.target.value);
            }}
          />
          <label htmlFor="caption">Caption</label>
          <input
            id="caption"
            type="text"
            placeholder="write caption"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
