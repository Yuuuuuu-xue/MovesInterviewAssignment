import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Data from "./Pages/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/data" element={<Data />}/>
        <Route path="*" element={<h1>404 page</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
