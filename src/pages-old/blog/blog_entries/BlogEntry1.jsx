// src/pages/blog_entries/BlogEntry1.jsx
import React from 'react';
import BlogEntryLayout from '../../../components/Blog/BlogEntryLayout';
import blogImage1 from '../../../assets/cial_logo.png';
import blogEntries from '../../../textos/blog/blogContent';

function BlogEntry1() {
  const { title, content } = blogEntries.blog1;

  return (
    <BlogEntryLayout
      title={title}
      image={blogImage1}
      content={content}
      prevLink={null}
      nextLink="/blog/2"
    />
  );
}

export default BlogEntry1;
