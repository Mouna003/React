import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WordOrNumber from "./components/WordOrNumber";
import StyledWord from "./components/StyledWord";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<WordOrNumber />} />
        <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
      </Routes>
    </div>
  );
}

export default App;