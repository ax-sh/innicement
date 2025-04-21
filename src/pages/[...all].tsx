import { useParams } from 'react-router';
import { FillViewPort } from '../components/fill-view-port';
import Layout from '../components/Layout';

export default function All() {
  const params = useParams();
  const path = params['*'] ?? 'unknown';
  return (
    <Layout className="container flex flex-col gap-10">
      <FillViewPort>
        {path}
        {' '}
        [404]
      </FillViewPort>
    </Layout>
  );
}
