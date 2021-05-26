import "./styles/App.scss";

import LeftSideBar from "./components/LeftSideBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
    <LeftSideBar/>  
    <Content/>
    </div>
  );
}

export default App;
