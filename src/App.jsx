import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CV from "./pages/cv";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writings" element={<Writings />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
