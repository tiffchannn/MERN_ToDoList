import React, {useState} from 'react';

const TaskList = props => {
  const {tasks, setTasks} = props;
  // const [input, setInput] = useState("");
  let task = {
    name: "",
    isComplete: false
  };


  const handleChange = (e) => {
    task.name = e.target.value;
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTasks([...tasks, task])
    e.target.value = "";
    // task = "";

    console.log("add task: ", task)
  };

  return(
    <div className="container">
      <input type="text" name="task" onChange= { handleChange }/>
      <button className="btn btn-primary" type="submit" onClick={handleClick}>Add It To The List!</button>
    </div>


  );
};

export default TaskList;