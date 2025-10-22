import { Metadata } from 'next';
import CategoryPage from '../../src/pages/CategoryPage';
import { CATEGORY_SEO } from '../../src/config/seo';

export const metadata: Metadata = {
  title: CATEGORY_SEO.puzzle.title,
  description: CATEGORY_SEO.puzzle.description,
  keywords: CATEGORY_SEO.puzzle.keywords,
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/puzzle',
  },
  openGraph: {
    title: CATEGORY_SEO.puzzle.title,
    description: CATEGORY_SEO.puzzle.description,
    url: 'https://www.stealabrainrotunblocked.com/puzzle',
    type: 'website',
  },
};

export default function Page() {
  return <CategoryPage slug="puzzle" />;
}

