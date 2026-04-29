import ProductsClient from './ProductsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Software Products - School ERP, HR, and Print Management',
  description:
    'Wisemen Soft builds Nexus School ERP, PressMaster print management, and StaffSync HR software for teams that need practical, workflow-specific systems.',
  path: '/products',
  keywords: [
    'school ERP software',
    'HR management software',
    'print management software',
    'business software products',
  ],
});

export default function ProductsPage() {
  return <ProductsClient />;
}
