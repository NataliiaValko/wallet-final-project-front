import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';

const BalancePage = lazy(() => import('pages' /* webpackChunkName: "BalancePage" */));

const NotFound = lazy(() =>
  import('pages/NotFound/NotFound' /* webpackChunkName: "Not-Found-page" */),
);

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            path="balance"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <BalancePage />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
