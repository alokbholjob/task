import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect =
    (() => {
      let arr = localStorage.getItem("taskList");
      if (arr) {
        let object = JSON.parse(arr);
        setTaskList(object);
      }
    },
    []);

  const toggle = () => {
    setModal(!modal);
  };

  const savedTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>TodoList</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          {" "}
          Add Task{" "}
        </button>
      </div>

      <div className="task-container">
        {taskList.map((obj) => (
          <div>
            <div className="card-wrapper mr-5">
              <div className="card-top mt-3"></div>
              <div className="task-holder">
                <span className="card-header"></span>

                      <p className="mt-3">{obj.Description}</p>
                      <p className="mt-3">{obj.Description}</p>
 
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddTask toggle={toggle} modal={modal} save={savedTask} />
    </>
  );
};

export default TodoList;
