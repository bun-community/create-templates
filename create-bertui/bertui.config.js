// bertui.config.js
// All fields are optional — BertUI works with zero config

export default {
  // Site info (used in sitemap + meta)
  siteName: 'My BertUI App',
  baseUrl: 'https://myapp.com',

  // HTML meta tags
  meta: {
    title: 'My BertUI App',
    description: 'Built with BertUI — fast React framework on Bun',
    themeColor: '#10b981',
    ogImage: '/og-image.png', // 1200x630px
  },

  // robots.txt
  robots: {
    disallow: ['/dashboard', '/admin', '/api'],
  },
};
