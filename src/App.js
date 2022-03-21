
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTasks from './Components/ListTasks/ListTasks';

function App() {
  return (
    <div className="App">
      <h1> To-Do List App </h1>
      <AddTask/>
      <ListTasks/> 
    </div>
  );
}

export default App;
