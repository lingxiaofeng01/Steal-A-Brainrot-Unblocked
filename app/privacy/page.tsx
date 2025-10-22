import { Metadata } from 'next';
import PrivacyPolicyPage from '../../src/pages/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy - Steal a Brainrot Unblocked',
  description: 'Read our privacy policy.',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/privacy',
  },
  robots: {
    index: false,
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

