import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<About />} />
        <Route path="/team" element={<About />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
