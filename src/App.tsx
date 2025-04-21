import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '~react-pages';
import { FillViewPort } from './components/fill-view-port';

function Loader() {
  return (
    <FillViewPort>
      <h1>Innicement</h1>
    </FillViewPort>
  );
}
function App() {
  // return <Home/>
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>;
}

export default App;
