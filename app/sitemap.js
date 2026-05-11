import { SITE_URL } from './seo';
import { cases } from './case-studies/data';
import { products } from './products/data';

const lastModified = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/case-studies', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const static_ = routes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const caseStudies = cases.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...static_, ...caseStudies, ...productPages];
}
