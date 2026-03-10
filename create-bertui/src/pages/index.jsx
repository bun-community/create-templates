import { Link } from 'bertui/router';
import styles from '../styles/home.module.css';
import '../styles/global.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.badge}>⚡ BertUI v1.2.0</div>
        <h1 className={styles.title}>
          Build Fast React Apps
          <span className={styles.gradient}> with BertUI</span>
        </h1>
        <p className={styles.subtitle}>
          File-based routing · Server Islands · Layouts · Middleware · Partial Hydration
        </p>
        <div className={styles.cta}>
          <Link to="/about" className={styles.btnPrimary}>Explore Features →</Link>
          <Link to="/blog" className={styles.btnSecondary}>View Blog</Link>
        </div>
      </header>

      <section className={styles.features}>
        <Feature icon="📁" title="File-Based Routing" desc="Create a file in src/pages/ and get a route. No config." />
        <Feature icon="🏝️" title="Server Islands" desc="Export serverIsland = true for zero-JS static HTML." />
        <Feature icon="📐" title="Layouts" desc="src/layouts/default.tsx wraps every page automatically." />
        <Feature icon="🛡️" title="Middleware" desc="src/middleware.ts runs before every single request." />
        <Feature icon="⚡" title="Partial Hydration" desc="Static pages ship zero JS. Auto-detected, zero config." />
        <Feature icon="🎨" title="CSS Modules" desc="Button.module.css — scoped styles, zero config." />
      </section>

      <section className={styles.quickstart}>
        <h2>Quick Start</h2>
        <pre className={styles.code}>{`bunx create-bertui my-app
cd my-app
bun run dev`}</pre>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.featureIcon}>{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
