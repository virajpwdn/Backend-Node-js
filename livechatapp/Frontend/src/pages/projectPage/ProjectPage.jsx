import React from "react";

const ProjectPage = () => {
  return (
    <div className="h-screen w-screen bg-[#18345D] flex p-5">
      {/* Chat Section */}
      <div className="flex flex-col w-1/3 bg-gray-300 p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="flex flex-col gap-2">
          <button className="bg-[#5B322C] text-white px-3 py-1 rounded">
            let's code
          </button>
          <button className="bg-[#5B322C] text-white px-3 py-1 rounded">
            Hello world
          </button>
        </div>
        <div className="mt-auto flex gap-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Enter message
          </button>
          <button className="bg-green-900 w-8 h-8 rounded"></button>
        </div>
      </div>

      {/* Code Section */}
      <div className="flex flex-col w-1/3 bg-gray-300 mx-5 p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Code</h2>
      </div>

      {/* AI Code Review Section */}
      <div className="flex flex-col w-1/3 bg-gray-300 p-5 rounded-lg flex items-center justify-center">
        <h2 className="text-xl font-bold">AI Code Review</h2>
      </div>
    </div>
  );
};

export default ProjectPage;
