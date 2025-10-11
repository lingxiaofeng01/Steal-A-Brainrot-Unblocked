import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function HomePage() {
  const [message, setMessage] = useState('Initializing...');

  useEffect(() => {
    setMessage('Component mounted!');
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Test Page</h1>
        <p className="text-slate-300">{message}</p>
      </div>
    </Layout>
  );
}
