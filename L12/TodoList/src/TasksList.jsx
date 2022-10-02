import React, { Component } from "react";
import Tasks from "./Tasks";
import CreateTaskInput from "./CreateTaskInput";
import {
  fetchTaskList,
  createNewTask,
  deleteTask,
  updateTask,
} from "./tasksGateway.js";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTasksList();
  }

  getTasksList() {
    fetchTaskList().then((tasks) => this.setState({ tasks }));
  }

  createTask = (text) => {
    createNewTask({ text, done: false }).then(() => this.getTasksList());
  };

  deleteTask = (id) => {
    deleteTask(id).then(() => this.getTasksList());
  };

  onChangeTaskStatus = (id) => {
    const task = this.state.tasks.find((task) => task.id === id);
    const { done, text } = task;
    updateTask(id, {
      done: !done,
      text,
    }).then(() => this.getTasksList());
  };

  render() {
    const sortList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.createTask} />
        <ul className="list">
          {sortList.map((task) => (
            <Tasks
              key={task.id}
              {...task}
              onChange={this.onChangeTaskStatus}
              onDelete={this.deleteTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TasksList;
