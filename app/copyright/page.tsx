import { Metadata } from 'next';
import CopyrightPage from '../../src/pages/CopyrightPage';

export const metadata: Metadata = {
  title: 'Copyright - Steal a Brainrot Unblocked',
  description: 'Copyright information.',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/copyright',
  },
  robots: {
    index: false,
  },
};

export default function Page() {
  return <CopyrightPage />;
}

