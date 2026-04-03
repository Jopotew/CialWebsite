import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./entry.css";

const modules = import.meta.glob("./entries/*.jsx", { eager: true });

const posts = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const slug = path.replace("./entries/", "").replace(".jsx", "");
    return [slug, mod.default];
  })
);

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="blog-post-page">
        <Link to="/novedades/blog" className="blog-post-page__back">
          <ChevronLeft size={18} />
          <span>Blog</span>
        </Link>
        <div className="blog-post-page__not-found">
          <p>Post no encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Link to="/novedades/blog" className="blog-post-page__back">
        <ChevronLeft size={18} />
        <span>Blog</span>
      </Link>

      <img src={post.img} alt={post.title} className="blog-post-page__img" />

      <div className="blog-post-page__content">
        <h1 className="blog-post-page__title">{post.title}</h1>

        <div className="blog-post-page__meta">
          <span className="blog-post-page__author">{post.author}</span>
          <span className="blog-post-page__date">{post.date}</span>
        </div>

        <div className="blog-post-page__body">
          {post.content
            ? post.content
            : post.paragraphs.map((p, i) => (
                <p key={i} className="blog-post-page__paragraph">{p}</p>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;