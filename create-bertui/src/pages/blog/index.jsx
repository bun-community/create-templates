import { Link } from 'bertui/router';
import styles from '../styles/blog.module.css';

// Wrapped by src/layouts/blog.tsx automatically (matches /blog/*)

const posts = [
  {
    slug: 'getting-started',
    title: 'Getting Started with BertUI',
    excerpt: 'File-based routing, zero config, 93ms builds. Here\'s how to hit the ground running.',
    date: 'Feb 20, 2026',
    readTime: '5 min',
    tag: 'Tutorial',
  },
  {
    slug: 'css-modules',
    title: 'CSS Modules — Scoped Styles, Zero Config',
    excerpt: 'Name your file Button.module.css and BertUI handles scoping automatically.',
    date: 'Feb 18, 2026',
    readTime: '3 min',
    tag: 'CSS',
  },
  {
    slug: 'server-islands',
    title: 'Server Islands & Partial Hydration',
    excerpt: 'Ship zero JS to static pages. One export, instant content, perfect SEO.',
    date: 'Feb 15, 2026',
    readTime: '6 min',
    tag: 'Performance',
  },
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.subtitle}>Guides, tips, and deep dives on BertUI.</p>

      <div className={styles.posts}>
        {posts.map(post => (
          <article key={post.slug} className={styles.post}>
            <span className={styles.tag}>{post.tag}</span>
            <h2 className={styles.postTitle}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
