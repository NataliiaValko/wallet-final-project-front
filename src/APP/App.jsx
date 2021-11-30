import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import Home from 'pages/Home/Home';

const SecondPage = lazy(() =>
  import('pages/Second/SecondPage' /* webpackChunkName: "SecondPage" */),
);

const NotFound = lazy(() =>
  import('pages/NotFound/NotFound' /* webpackChunkName: "Not-Found-page" */),
);

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />

          <Route
            path="second"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <SecondPage />
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
