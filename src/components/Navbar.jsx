import React from "react";

const Navbar = ({ setModalType }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Todo App</h1>
      <button className="navbar__button" onClick={() => setModalType("add")}>
        Add Task
      </button>
    </nav>
  );
};


export default Navbar;

