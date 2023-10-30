"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const [totalTasks, settotalTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    settotalTasks([...totalTasks, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
      
    let copyTask = [...totalTasks]
    copyTask.splice(i, 1);
    settotalTasks(copyTask);
  }


  let renderTask = <h2>No Task Avialable</h2>;

  if (totalTasks.length > 0) {
    renderTask = totalTasks.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center ">
          <div className="flex justify-between w-2/3 items-center">
            <h2>{t.task}</h2>
            <h2>{t.desc}</h2>
          </div>
          <button 
          onClick={() => {deleteHandler(i)}}
          className="bg-red-400 py-2 px-4 rounded-md my-4">Delete</button>
        </li>
      );
    });
  }

   
  return (
    <>
      <h1 className="bg-black text-center py-4 text-white text-4xl font-bold">
        To Do App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Task Here"
          className="border-2 border-zinc-700 m-8 px-4 py-2 text-2xl"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter Description Here"
          className="border-2 border-zinc-700 m-8 px-4 py-2 text-2xl"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-4 rounded-md text-2xl">
          Add Task
        </button>
      </form>
      <div className="text-xl  bg-blue-200 p-5">
        {renderTask}
      </div>
    </>
  );
};

export default page;
