import { Metadata } from 'next';
import SearchPage from '../../src/pages/SearchPage';

export const metadata: Metadata = {
  title: 'Search Games - Steal a Brainrot Unblocked',
  description: 'Search for your favorite unblocked games on Steal a Brainrot Unblocked. Find puzzle games, action games, and more!',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/search',
  },
  robots: 'noindex, follow',
};

export default function Page() {
  return <SearchPage />;
}

