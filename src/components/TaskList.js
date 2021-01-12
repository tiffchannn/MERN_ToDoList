import React, {useState} from 'react';

const TaskList = props => {
  const {task, index, setTasks, tasks} = props;

  const deleteTask = () => {
    setTasks(() => {
      return tasks.filter(task => tasks.indexOf(task) !== index);
    });
  };

  const checkTask = e => {
    tasks[index].isComplete = !tasks[index].isComplete;
    setTasks([...tasks]);
  }

  return(
      <div className="tasks">
        <h5 style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}> { task.name} </h5>
        <label htmlFor="checkbox"></label>
          <input
            className="checkbox"
            type="checkbox"
            checked={task.isComplete}
            onChange={checkTask}
          />
        <button onClick={deleteTask} className="delete-btn">Delete!</button>
      </div>

  );
};

export default TaskList;