import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState({});
  useEffect(() => {
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

  return <div>
    {/* {console.log(data.message.username)} */}
    <h1>{data.message?.username}</h1>
  </div>;
};

export default Profile;
