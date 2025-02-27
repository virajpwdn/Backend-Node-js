import React from "react";

const Feed = () => {
  return (
    <div className="flex-1 flex justify-center items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-700">Instagram Feed</h1>
      <div className="top flex items-center gap-2">
        <div className="profile-img h-14 w-14 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="photo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <h2>username</h2>
      </div>
    </div>
  );
};

export default Feed;
