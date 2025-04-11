import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage"; // 👈 Thêm dòng này

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} /> {/* 👈 Thêm route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
