import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const allTags = ["Tất cả", ...new Set(projects.flatMap((p) => p.tags))];

export default function Projects() {
  const [filter, setFilter] = useState("Tất cả");

  const filteredProjects = filter === "Tất cả"
    ? projects
    : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        🌟 Dự án nổi bật
      </h2>

      {/* Bộ lọc */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full border ${
              filter === tag
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            } hover:shadow transition-all`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
