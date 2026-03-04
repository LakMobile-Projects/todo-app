import React, { useState } from "react";
import Navbar from "./Navbar";

const TodoList = ({ tasks, setModalType, setSelectedTaskId }) => {
  return (
    <div className="container-md">
      <Navbar setModalType={setModalType} />


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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <span
                    className={`status-badge ${task.status === "complete" ? "complete" : "incomplete"}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="actions">
                  <button className="edit-button"
                          onClick={() => {
                            setSelectedTaskId(task.id);
                            setModalType("edit");
                          }}>Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => {
                      setSelectedTaskId(task.id);
                      setModalType("delete");
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;

