import ProductsClient from './ProductsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Business Software Products - ERP, HR, and Print Management',
  description:
    'Explore Wisemen Soft products including Nexus School ERP, PressMaster print management, and StaffSync HR software for workflow-specific business operations.',
  path: '/products',
  keywords: [
    'school ERP software',
    'HR management software',
    'print management software',
    'business software products',
    'custom business systems',
  ],
});

export default function ProductsPage() {
  return <ProductsClient />;
}
