import { Metadata } from 'next';
import CategoryPage from '../../src/pages/CategoryPage';
import { CATEGORY_SEO } from '../../src/config/seo';

export const metadata: Metadata = {
  title: CATEGORY_SEO.all.title,
  description: CATEGORY_SEO.all.description,
  keywords: CATEGORY_SEO.all.keywords,
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/all',
  },
  openGraph: {
    title: CATEGORY_SEO.all.title,
    description: CATEGORY_SEO.all.description,
    url: 'https://www.stealabrainrotunblocked.com/all',
    type: 'website',
  },
};

export default function Page() {
  return <CategoryPage slug="all" />;
}

