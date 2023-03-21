import Home from "./pages/home";
import About from "./pages/about";
import Testimonials from "./pages/testimonials";
import Team from "./pages/team";
import Rental from "./pages/rental";
import ContactForm from "./pages/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/rental" element={<Rental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
