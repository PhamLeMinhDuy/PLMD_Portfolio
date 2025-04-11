import { motion } from "framer-motion";
import profileImg from "../assets/avatar.jpg"; // 👉 Bạn thay bằng ảnh của bạn

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-6">
      {/* Text */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Xin chào, mình là <span className="text-blue-500">[Tên Bạn]</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Frontend Developer | UI/UX Enthusiast
        </p>
      </motion.div>

      {/* Ảnh đại diện */}
      <motion.img
        src={profileImg}
        alt="avatar"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </section>
  );
}
