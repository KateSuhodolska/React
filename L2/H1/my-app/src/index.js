import "./list.css";
import ReactDOM from "react-dom";
import React from "react";

const container = document.querySelector("body");

const elem = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
);
ReactDOM.render(elem, container);
