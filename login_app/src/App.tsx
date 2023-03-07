import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import {Content} from "./Content"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App__content">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
