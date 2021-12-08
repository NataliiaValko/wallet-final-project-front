import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Registration from 'pages/Registration';
import ProfilePage from 'pages/ProfilePage';

const BalancePage = lazy(() => import('pages' /* webpackChunkName: "BalancePage" */));

const NotFound = lazy(() =>
  import('pages/NotFound/NotFound' /* webpackChunkName: "Not-Found-page" */),
);

function App() {
  return (
    <main>
      <AppBar />
      <Routes>
        <Route path="/" element={<Registration />} />

        <Route
          path="balance"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <BalancePage />
            </Suspense>
          }
        />

        <Route
          path="profile"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProfilePage />
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
      </Routes>
    </main>
  );
}

export default App;
