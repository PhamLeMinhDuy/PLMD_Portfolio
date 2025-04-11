import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
];

export default function Skills() {
  return (
    <section className="py-12 pt-0 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">🔧 Kỹ năng của mình</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-800"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
