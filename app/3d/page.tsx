import { Metadata } from 'next';
import CategoryPage from '../../src/pages/CategoryPage';
import { CATEGORY_SEO } from '../../src/config/seo';

export const metadata: Metadata = {
  title: CATEGORY_SEO['3d'].title,
  description: CATEGORY_SEO['3d'].description,
  keywords: CATEGORY_SEO['3d'].keywords,
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/3d',
  },
  openGraph: {
    title: CATEGORY_SEO['3d'].title,
    description: CATEGORY_SEO['3d'].description,
    url: 'https://www.stealabrainrotunblocked.com/3d',
    type: 'website',
  },
};

export default function Page() {
  return <CategoryPage slug="3d" />;
}

