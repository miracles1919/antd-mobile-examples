import Link from 'next/link';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <Link href='/demo'>demo</Link>
    </Layout>
  );
}
