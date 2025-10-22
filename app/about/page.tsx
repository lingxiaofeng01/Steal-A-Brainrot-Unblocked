import { Metadata } from 'next';
import AboutUsPage from '../../src/pages/AboutUsPage';

export const metadata: Metadata = {
  title: 'About Us - Steal a Brainrot Unblocked',
  description: 'Learn about Steal a Brainrot Unblocked - your ultimate destination for free unblocked games.',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/about',
  },
};

export default function Page() {
  return <AboutUsPage />;
}

