import "./App.css";
import Home from "./Home";
import ProgressBar from "./ProgressBar";
function App() {
  // const state = {
  //   size: 200,
  //   progress: 40,
  //   strokeWidth: 5,
  //   circleOneStroke: "red",
  //   circleTwoStroke: "orange",
  // };
  return (
    <div className="App">
      <ProgressBar />
      <Home />
    </div>
  );
}

export default App;
