import {Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Css from './pages/css';
import Html from './pages/html';
import JavaScript from './pages/javascript';


function App() {
return(
  <div className="App">
    <h1 style={{ color: "red" }}>Welcome to My Page</h1>
    <Routes>
      <route path="/" element={<Home/>}/>
      <route path="/html" element={<Html/>}/>
      <route path="/css" element={<Css/>}/>
      <route path="/JavaScript" element={<JavaScript/>}/>
    </Routes>
  </div>
)
}

export default App;
