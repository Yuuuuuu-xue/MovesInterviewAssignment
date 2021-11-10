import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Data from "./Pages/Data";
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/data" element={<Data />}/>
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
