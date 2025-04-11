import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg"; // Đặt ảnh đại diện tại src/assets/avatar.jpg
import Skills from "../components/Skills";
import Projects from "./Projects";
import ContactForm from "../components/ContactForm";
export default function Home() {
  return (
    <>
      {/* Giới thiệu bản thân */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-20 bg-white dark:bg-gray-900 py-10 pb-0">
        {/* Text giới thiệu */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            👋 Xin chào, mình là <br />
            <span className="text-blue-600 dark:text-blue-400">Phạm Lê Minh Duy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Frontend Developer • Đam mê UI/UX • Yêu thích Animation
          </p>

          {/* Nút liên hệ */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300"
            >
              Liên hệ mình
            </a>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Xem dự án
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.img
          src={avatar}
          alt="avatar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-500 dark:border-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        />
      </section>

      {/* 👉 Mục kỹ năng */}
      <Skills />

      <Projects />

      <ContactForm />
    </>
  );
}
