import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Products — Wisemen Soft',
  description: 'Nexus School ERP, PressMaster print management, and StaffSync HR supervision. Software built for specific problems, not generic use cases.',
  openGraph: {
    title: 'Products — Wisemen Soft',
    description: 'School ERP, print management, and HR software built to fit real workflows.',
    url: 'https://wisemensoft.com/products',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
