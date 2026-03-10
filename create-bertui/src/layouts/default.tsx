import { Link } from 'bertui/router';
import styles from '../styles/layout.module.css';

// src/layouts/default.tsx — wraps ALL pages automatically
// src/layouts/blog.tsx   — wraps /blog/* only (see that file)

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>⚡ BertUI</Link>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/blog" className={styles.link}>Blog</Link>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>Built with BertUI · <a href="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener">GitHub</a></p>
      </footer>
    </div>
  );
}
