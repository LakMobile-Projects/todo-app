import React from "react";
import Navbar from "./Navbar";

const TodoList = () => {
  const tasks = [
    { id: 1, title: "Redesign Todo Application", status: "incomplete" },
    { id: 2, title: "Integrate Redux Logic", status: "complete" },
  ];

  return (
    <div className="container-md">
      <Navbar />

      <div className="todo-list">
        <table className="todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>
                    <span
                      className={` status-badge ${task.status === "complete" ? "complete" : "incomplete"}`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
