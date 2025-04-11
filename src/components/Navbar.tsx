import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">My</span> Portfolio
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/blog"
          className="text-lg text-blue-600 dark:text-blue-400 font-medium hover:underline transition"
        >
          Blog
        </Link>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl hover:scale-110 transition-transform duration-300"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
