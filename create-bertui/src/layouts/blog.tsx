import { Link } from 'bertui/router';
import styles from '../styles/layout.module.css';

// src/layouts/blog.tsx — wraps /blog/* pages only
// Default layout still provides the nav/footer

export default function BlogLayout({ children }) {
  return (
    <div>
      <div className={styles.blogBreadcrumb}>
        <Link to="/" className={styles.crumb}>Home</Link>
        <span className={styles.sep}>/</span>
        <Link to="/blog" className={styles.crumb}>Blog</Link>
      </div>
      {children}
    </div>
  );
}
