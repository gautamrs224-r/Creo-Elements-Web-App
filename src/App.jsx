import { Routes, Route } from "react-router-dom";

import TopBar from "./components/layout/TopBar";
import BottomNav from "./components/layout/BottomNav";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import WorkWithUs from "./pages/WorkWithUs";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
