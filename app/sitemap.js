import { SITE_URL } from './seo';

const lastModified = '2026-04-29';

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/case-studies', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
