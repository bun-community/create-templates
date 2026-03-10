// src/pages/loading.tsx
// Shows while JavaScript downloads and React mounts
// NOT a route — BertUI skips this file during route discovery

import styles from '../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>Loading…</p>
    </div>
  );
}
