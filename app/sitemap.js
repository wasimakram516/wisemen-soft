export default function sitemap() {
  const base = 'https://wisemensoft.com';
  const routes = ['', '/about', '/products', '/case-studies', '/contact'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
