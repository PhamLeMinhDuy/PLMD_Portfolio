import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";

interface Props {
  slug: string; // Ví dụ: 'bai-1'
}

export default function BlogPost({ slug }: Props) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("404");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("Bài viết không tồn tại."));
  }, [slug]);

  return (
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto p-6">
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        >
            {content}
        </ReactMarkdown>
</article>

  );
}
