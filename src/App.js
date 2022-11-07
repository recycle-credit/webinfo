import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutPage";
import Contact from "./pages/ContactUsPage/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" exact element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
  </Router>
    )
}

export default App;
