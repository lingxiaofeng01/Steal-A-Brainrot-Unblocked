import { Metadata } from 'next';
import CategoryPage from '../../src/pages/CategoryPage';
import { CATEGORY_SEO } from '../../src/config/seo';

export const metadata: Metadata = {
  title: CATEGORY_SEO.action.title,
  description: CATEGORY_SEO.action.description,
  keywords: CATEGORY_SEO.action.keywords,
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/action',
  },
  openGraph: {
    title: CATEGORY_SEO.action.title,
    description: CATEGORY_SEO.action.description,
    url: 'https://www.stealabrainrotunblocked.com/action',
    type: 'website',
  },
};

export default function Page() {
  return <CategoryPage slug="action" />;
}

