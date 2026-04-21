import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import SplashScreen from '@/components/SplashScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Wisemen Soft — Discover. Develop. Deliver.',
  description:
    'Wisemen Soft is a software studio that builds professional, scalable digital products. We analyze, develop, and deliver.',
  keywords: ['software studio', 'web development', 'ERP', 'custom software', 'Pakistan'],
  openGraph: {
    title: 'Wisemen Soft',
    description: 'Discover. Develop. Deliver.',
    url: 'https://wisemensoft.com',
    siteName: 'Wisemen Soft',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${montserrat.variable}`}
        style={{ overflowX: 'hidden', backgroundColor: '#0A0A0A' }}
      >
        <ThemeRegistry>
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
