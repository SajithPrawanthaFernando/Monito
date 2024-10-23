import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import CategoryBanner from "./pages/Category";
import About from "./pages/About";

function PublicLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryBanner />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
