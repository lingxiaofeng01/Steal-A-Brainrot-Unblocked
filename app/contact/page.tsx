import { Metadata } from 'next';
import ContactUsPage from '../../src/pages/ContactUsPage';

export const metadata: Metadata = {
  title: 'Contact Us - Steal a Brainrot Unblocked',
  description: 'Get in touch with us. We would love to hear from you!',
  alternates: {
    canonical: 'https://www.stealabrainrotunblocked.com/contact',
  },
};

export default function Page() {
  return <ContactUsPage />;
}

