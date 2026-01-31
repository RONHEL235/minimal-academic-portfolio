import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";
import Writing from "./pages/Writing";
import Graphics from "./pages/Graphics";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/writings/:slug" element={<Writing />} />
            <Route path="/graphics/:slug" element={<Graphics />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
