import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '~react-pages';
import { FillViewPort } from './components/fill-view-port';
import Layout from './components/Layout';

function Loader() {
  return (
    <Layout>
      <FillViewPort>
        <h1>Innicement</h1>
      </FillViewPort>
    </Layout>
  );
}
function App() {
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>;
}

export default App;
