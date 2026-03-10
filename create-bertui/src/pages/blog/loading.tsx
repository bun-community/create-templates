// src/pages/blog/loading.tsx
// Loading state for /blog/* routes — inherits to nested blog pages too
// NOT a route

import styles from '../../styles/loading.module.css';

export default function BlogLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>Loading post…</p>
    </div>
  );
}
