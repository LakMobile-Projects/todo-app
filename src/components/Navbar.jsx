import React from "react";
import "../styles/_todo.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Todo App</h1>
      <button className="navbar__button">Add Task</button>
    </nav>
  );
};

export default Navbar;
