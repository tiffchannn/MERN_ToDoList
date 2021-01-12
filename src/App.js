import './App.css';
// import logo from './logo.svg';
import React, {useState} from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';


function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <h1>Task List</h1>
      <Form tasks={ tasks } setTasks={ setTasks }/>
      {tasks.map((task, index) => (
        <TaskList className="task-component" task={task} setTasks={setTasks}  index={index} tasks={tasks}/>
      ))}
    </div>
  );
}

export default App;
