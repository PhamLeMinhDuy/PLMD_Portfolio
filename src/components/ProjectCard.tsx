import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export default function ProjectCard({ title, description, image, tags, demo, github }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white text-xs px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demo && (
            <a href={demo} target="_blank" className="text-sm text-blue-600 hover:underline">
              🔗 Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
              📦 GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
