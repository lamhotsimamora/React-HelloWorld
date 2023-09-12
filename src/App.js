
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./layout/Profile";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import About from "./layout/About";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
