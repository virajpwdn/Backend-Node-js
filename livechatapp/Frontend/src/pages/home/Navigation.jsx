import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [list, setList] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    axios
      .get("http://localhost:3000/v1/api/projects/list")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const addNewProject = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/v1/api/projects/create", {
        name: projectName,
      })
      .then((res) => {
        console.log(res.data);
        setIsModalOpen(false);
        setProjectName("");
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  const openHandler = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container text-white flex flex-col p-10 border-r-2 w-[20em]">
      <div className="top w-full flex justify-center">
        <button
          onClick={openHandler}
          className="rounded bg-green-500 px-4 py-2"
        >
          New Project
        </button>
      </div>
      <div className="bottom mt-20 flex flex-col gap-4">
        {list &&
          list.map((elem, idx) => {
            return (
                <button onClick={()=>{navigate(`/project/${elem._id}`)}}
                key={idx}
                className="py-2 bg-emerald-700 w-full rounded font-semibold"
              >
                {elem.name}
              </button>
            );
          })}
      </div>
      {isModalOpen && (
        <div className="absolute top-0 bg-red-400 left-0 h-screen w-screen flex items-center justify-center">
          <form onSubmit={addNewProject} className="flex flex-col gap-5">
            <input
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              className="outline-none border-2 p-2 border-white"
              type="text"
              placeholder="enter project name"
            />

            <button className="px-2 py-2 bg-emerald-700 rounded">
              New Post
            </button>
          </form>
          <span
            onClick={closeHandler}
            className="text-sky-300 absolute top-0 right-0 p-10 text-5xl"
          >
            <i className="ri-close-line"></i>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navigation;
