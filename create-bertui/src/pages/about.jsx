import { Link, useRouter } from 'bertui/router';
import styles from '../styles/about.module.css';

// This page is wrapped by src/layouts/default.tsx automatically

export default function About() {
  const { navigate } = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About BertUI</h1>

      <p className={styles.lead}>
        A React framework built on Bun. If you know React, you already know BertUI.
      </p>

      <section className={styles.section}>
        <h2>What's Built In</h2>
        <div className={styles.grid}>
          <Item title="File-Based Routing" desc="Pages in src/pages/ become routes. No config." />
          <Item title="Layouts" desc="src/layouts/default.tsx wraps all pages. src/layouts/blog.tsx wraps /blog/* only." />
          <Item title="Loading States" desc="loading.tsx next to any page shows while React mounts." />
          <Item title="Middleware" desc="src/middleware.ts runs before every request. Auth, redirects, logging." />
          <Item title="Server Islands" desc="export const serverIsland = true — zero JS, static HTML at build time." />
          <Item title="Partial Hydration" desc="Static pages ship 0 bytes of JS. Auto-detected by BertUI." />
          <Item title="CSS Modules" desc="Button.module.css — scoped styles, works out of the box." />
          <Item title="Modern CSS" desc="Nesting, color-mix(), :has(), container queries — no SCSS needed." />
          <Item title="Env Vars" desc=".env file auto-loaded, type-safe via import.meta.env" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Navigation Example</h2>
        <p className={styles.muted}>BertUI gives you Link and useRouter for client-side navigation.</p>
        <div className={styles.navDemo}>
          <Link to="/" className={styles.linkBtn}>← Home (Link)</Link>
          <button className={styles.linkBtn} onClick={() => navigate('/blog')}>
            Blog (useRouter)
          </button>
        </div>
      </section>
    </div>
  );
}

function Item({ title, desc }) {
  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
