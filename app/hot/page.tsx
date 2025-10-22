import { Metadata } from 'next';
import CategoryPage from '../../src/pages/CategoryPage';
import { CATEGORY_SEO } from '../../src/config/seo';

export const metadata: Metadata = {
  title: CATEGORY_SEO.hot.title,
  description: CATEGORY_SEO.hot.description,
  keywords: CATEGORY_SEO.hot.keywords,
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/hot',
  },
  openGraph: {
    title: CATEGORY_SEO.hot.title,
    description: CATEGORY_SEO.hot.description,
    url: 'https://www.stealabrainrotunblocked.com/hot',
    type: 'website',
  },
};

export default function Page() {
  return <CategoryPage slug="hot" />;
}

