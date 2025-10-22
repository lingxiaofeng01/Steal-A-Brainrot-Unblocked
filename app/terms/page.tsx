import { Metadata } from 'next';
import TermsOfUsePage from '../../src/pages/TermsOfUsePage';

export const metadata: Metadata = {
  title: 'Terms of Use - Steal a Brainrot Unblocked',
  description: 'Read our terms of use and conditions.',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/terms',
  },
  robots: {
    index: false,
  },
};

export default function Page() {
  return <TermsOfUsePage />;
}

