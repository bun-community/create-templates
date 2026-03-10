// src/templates/blog-post.jsx
// Template for Page Builder - DO NOT EDIT DIRECTLY

export default function BlogPost({ data }) {
  return (
    <article style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          {data.title}
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          color: '#666',
          fontSize: '0.95rem',
          marginBottom: '20px'
        }}>
          <span>By {data.author}</span>
          <span>•</span>
          <time>{new Date(data.publishedAt).toLocaleDateString()}</time>
        </div>

        {data.coverImage && (
          <img 
            src={data.coverImage} 
            alt={data.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginTop: '20px'
            }}
          />
        )}
      </header>

      {data.tags && data.tags.length > 0 && (
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {data.tags.map(tag => (
            <span 
              key={tag}
              style={{
                padding: '4px 12px',
                background: '#f0f0f0',
                borderRadius: '4px',
                fontSize: '0.875rem',
                color: '#444'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#333'
      }}>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>

      <footer style={{
        marginTop: '60px',
        paddingTop: '30px',
        borderTop: '1px solid #e0e0e0',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        {data.category && (
          <p>Category: <strong>{data.category}</strong></p>
        )}
        {data.updatedAt && (
          <p>Last updated: {new Date(data.updatedAt).toLocaleDateString()}</p>
        )}
        <p style={{ marginTop: '20px' }}>
          <a href="/blog" style={{ color: '#10b981', textDecoration: 'none' }}>
            ← Back to Blog
          </a>
        </p>
      </footer>
    </article>
  );
}