import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Data from "./Pages/Data";
import Layout from './Components/Layout';
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/data" element={<Data />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
