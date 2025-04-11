// src/pages/BlogPage.tsx
import { useState } from "react";
import BlogPost from "../components/BlogPost";

const posts = [
  { title: "5 mẹo để học React hiệu quả", slug: "bai-1", date: "2025-03-19" },
  { title: "Tối ưu UI/UX cho Developer", slug: "bai-2", date: "2025-03-18" },
];

export default function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">📝 Bài viết</h1>

      {/* Nếu đã chọn bài, hiển thị nội dung */}
      {selectedSlug ? (
        <div>
          <button
            onClick={() => setSelectedSlug(null)}
            className="text-blue-600 dark:text-blue-400 mb-6 hover:underline"
          >
            ← Quay lại danh sách
          </button>
          <BlogPost slug={selectedSlug} />
        </div>
      ) : (
        <section className="max-w-3xl mx-auto space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              onClick={() => setSelectedSlug(post.slug)}
              className="cursor-pointer p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{post.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
