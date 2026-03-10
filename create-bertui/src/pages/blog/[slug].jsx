import { Link } from 'bertui/router';
import styles from '../../styles/blog-post.module.css';

// This page has onClick so BertUI auto-detects it as interactive (ships JS)
// See /blog/server-islands for a zero-JS Server Island example

const posts = {
  'getting-started': {
    title: 'Getting Started with BertUI',
    date: 'Feb 20, 2026',
    readTime: '5 min',
    tag: 'Tutorial',
    content: [
      { type: 'p', text: 'BertUI gives you file-based routing, layouts, middleware, loading states, and partial hydration — all zero config.' },
      { type: 'h2', text: 'Create your first page' },
      { type: 'code', text: '// src/pages/hello.jsx\nexport default function Hello() {\n  return <h1>Hello World</h1>;\n}\n// → automatically available at /hello' },
      { type: 'h2', text: 'Dynamic routes' },
      { type: 'code', text: '// src/pages/user/[id].jsx\nexport default function User({ params }) {\n  return <h1>User: {params.id}</h1>;\n}' },
      { type: 'h2', text: 'Navigation' },
      { type: 'code', text: 'import { Link, useRouter } from \'bertui/router\';\n\n<Link to="/about">About</Link>\n\n// or programmatic:\nconst { navigate } = useRouter();\nnavigate(\'/dashboard\');' },
    ],
  },
  'css-modules': {
    title: 'CSS Modules — Scoped Styles, Zero Config',
    date: 'Feb 18, 2026',
    readTime: '3 min',
    tag: 'CSS',
    content: [
      { type: 'p', text: 'CSS Modules scope your styles to the component. No class name collisions, no global pollution.' },
      { type: 'h2', text: 'Usage' },
      { type: 'code', text: '// Button.module.css\n.btn {\n  padding: 0.75rem 1.5rem;\n  background: #10b981;\n  border-radius: 8px;\n}\n\n// Button.jsx\nimport styles from \'./Button.module.css\';\n\nexport default function Button() {\n  return <button className={styles.btn}>Click</button>;\n}' },
      { type: 'h2', text: 'Modern CSS Nesting (no SCSS needed)' },
      { type: 'code', text: '.card {\n  padding: 2rem;\n  border-radius: 10px;\n\n  & h3 {\n    color: #10b981;\n  }\n\n  &:hover {\n    transform: translateY(-3px);\n  }\n}' },
      { type: 'p', text: 'BertUI uses LightningCSS under the hood — CSS nesting, color-mix(), :has(), container queries all work without any preprocessor.' },
    ],
  },
  'server-islands': {
    title: 'Server Islands & Partial Hydration',
    date: 'Feb 15, 2026',
    readTime: '6 min',
    tag: 'Performance',
    content: [
      { type: 'p', text: 'BertUI ships zero JS to pages that don\'t need it — auto-detected by scanning for hooks and event handlers.' },
      { type: 'h2', text: 'Server Islands (SSG)' },
      { type: 'code', text: '// src/pages/marketing.jsx\nexport const serverIsland = true;\n\nexport default function Marketing() {\n  return <h1>Static HTML at build time ✅</h1>;\n}\n// → 0 bytes JS, instant load, perfect SEO' },
      { type: 'h2', text: 'Partial Hydration' },
      { type: 'p', text: 'No config needed. BertUI scans every page for useState, useEffect, onClick, etc. Pages with none get zero JS. Pages with interactivity get full hydration.' },
      { type: 'code', text: '// Build output:\n// ⚡ Interactive (needs JS): 2 routes\n// 🧊 Static (no JS): 7 routes' },
    ],
  },
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>Post not found</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <span className={styles.tag}>{post.tag}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime}</span>
        </div>
      </header>

      <div className={styles.content}>
        {post.content.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
          if (block.type === 'code') return <pre key={i} className={styles.code}><code>{block.text}</code></pre>;
          return <p key={i}>{block.text}</p>;
        })}
      </div>

      <footer className={styles.footer}>
        <Link to="/blog" className={styles.back}>← Back to Blog</Link>
      </footer>
    </article>
  );
}
