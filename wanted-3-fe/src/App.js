import "./App.css";
import Header from "./Component/Common/Header";
import Nav from "./Component/Common/Nav";
import Apage from "./Pages/Apage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Apage></Apage>
    </div>
  );
}

export default App;
