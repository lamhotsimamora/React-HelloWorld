
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./layout/Profile";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import About from "./layout/About";
import Foto from "./layout/Foto";

function App() {
  return (
    <div className="container">
      <br/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/foto" element={<Foto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
