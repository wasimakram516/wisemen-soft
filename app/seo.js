export const SITE_URL = 'https://www.wisemensoft.com';
export const SITE_NAME = 'Wisemen Soft';
export const DEFAULT_DESCRIPTION =
  'Wisemen Soft is a Pakistan-based software house building custom web apps, ERP systems, HR software, print management tools, and scalable digital products for global teams.';

export const defaultOpenGraphImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Wisemen Soft - custom software development studio',
};

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  keywords = [],
}) {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [
      'Wisemen Soft',
      'software house Pakistan',
      'custom software development',
      'web app development',
      'ERP development',
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [defaultOpenGraphImage],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOpenGraphImage.url],
    },
  };
}
