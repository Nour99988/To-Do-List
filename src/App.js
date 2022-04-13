import "./App.css";
import ToDo from "./Components/Todo/ToDo";
import InProgress from "./Components/InProgress/InProgress";
import Done from "./Components/Done/Done";
import BtnAddNewTask from "./Components/BtnAddNewTask/BtnAddNewTask";

function App() {
  return (
    <div className="App">
      <BtnAddNewTask />
      <div className="section">
        <ToDo />
        <InProgress />
        <Done />
      </div>
    </div>
  );
}

export default App;
