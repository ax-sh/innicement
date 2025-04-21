import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '~react-pages';
import { FillViewPort } from './components/fill-view-port';
import Layout from './components/Layout';
import { AppErrorBoundary } from './components/Layout/error';

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
  return <AppErrorBoundary><Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense></AppErrorBoundary>;
}

export default App;
