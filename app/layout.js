import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import SplashScreen from '@/components/SplashScreen';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, createPageMetadata } from './seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.png`,
  email: 'wasimakram4245@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Wasim Akram',
    url: 'https://www.wasimakram.org',
  },
  areaServed: ['Pakistan', 'GCC', 'Europe', 'Global'],
  description: DEFAULT_DESCRIPTION,
  knowsAbout: [
    'Custom software development',
    'ERP systems',
    'School management software',
    'HR management software',
    'Print management software',
    'Web application development',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom software development' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP software development' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web application development' } },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: 'Wisemen Soft - Custom Software House in Pakistan',
    path: '/',
    keywords: ['software studio', 'web development Pakistan', 'custom software Pakistan'],
  }),
  applicationName: SITE_NAME,
  authors: [{ name: 'Wasim Akram', url: 'https://www.wasimakram.org' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable}`}
        style={{ overflowX: 'hidden', backgroundColor: '#0A0A0A' }}
      >
        <ThemeRegistry>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <SplashScreen />
        </ThemeRegistry>
      </body>
    </html>
  );
}
