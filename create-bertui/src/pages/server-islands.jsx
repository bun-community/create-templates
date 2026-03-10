// src/pages/server-islands
import '../styles/islands.css';

// This is a Server Island! Uncomment the line below to pre-render as static HTML
// export const render = "server";

export const meta = {
  title: "Server Islands - BertUI",
  description: "Learn about BertUI's Server Islands for perfect SEO"
};

export default function ServerIslands() {
  return (
    <div className="islands-container">
      <div className="islands-badge">🏝️ NEW IN v1.1.0</div>
      
      <h1 className="islands-title">Server Islands</h1>
      
      <p className="islands-lead">
        Add one line of code, get static HTML. Perfect SEO without complexity.
      </p>

      <section className="islands-section">
        <h2>What Are Server Islands?</h2>
        <p>
          Server Islands pre-render your pages as static HTML at build time. 
          Search engines see full content immediately. Users get instant first paint.
        </p>
      </section>

      <section className="islands-section">
        <h2>How to Use</h2>
        <pre className="code-block">
{`// Just add this line to any page
export const render = "server";

// Optional: Add meta tags
export const meta = {
  title: "My Page",
  description: "Perfect SEO!"
};

export default function MyPage() {
  return <h1>Pre-rendered HTML!</h1>;
}`}
        </pre>
      </section>

      <section className="islands-section">
        <h2>When to Use</h2>
        <div className="islands-grid">
          <div className="box box-good">
            <h3>✅ Perfect For</h3>
            <ul>
              <li>Landing pages</li>
              <li>Blog posts</li>
              <li>Documentation</li>
              <li>Marketing pages</li>
            </ul>
          </div>
          <div className="box box-bad">
            <h3>❌ Not For</h3>
            <ul>
              <li>Dashboards</li>
              <li>Forms with state</li>
              <li>User authentication</li>
              <li>Real-time data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="islands-section">
        <h2>The Results</h2>
        <div className="results-grid">
          <div className="result-card">
            <div className="result-number">0ms</div>
            <div className="result-label">Time to First Byte</div>
          </div>
          <div className="result-card">
            <div className="result-number">100%</div>
            <div className="result-label">SEO Coverage</div>
          </div>
          <div className="result-card">
            <div className="result-number">~80ms</div>
            <div className="result-label">Per Route Build</div>
          </div>
        </div>
      </section>

      <div className="islands-cta">
        < a href="/" className="btn btn-back">← Back to Home</a>
        <a href="https://bertui-docswebsite.vercel.app/server-islands" className="btn btn-docs" target="_blank" rel="noopener">
          Full Documentation →
        </a>
      </div>
    </div>
  );
}