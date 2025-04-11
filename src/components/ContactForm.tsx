import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2rhtda",       // 👉 Thay bằng SERVICE_ID của bạn
        "template_vfstxnq",    // 👉 TEMPLATE_ID
        formRef.current!,       // Ref của form
        "cVPB9ozunbH6WKRiL"    // 👉 PUBLIC KEY (User ID)
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        formRef.current?.reset();
      })
      .catch((error) => {
        alert("Gửi thất bại! " + error.text);
      });
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-20">
      <motion.div
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">📩 Liên hệ với mình</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Họ tên của bạn"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Nội dung tin nhắn..."
            rows={5}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Gửi tin nhắn
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 text-center">✅ Đã gửi tin nhắn thành công!</p>
        )}
      </motion.div>
    </section>
  );
}
