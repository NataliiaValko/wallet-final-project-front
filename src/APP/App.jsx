import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import Home from 'pages/Home/Home';
import RegisterForm from '../components/register'

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
          
          
             <Route path='register' element={<RegisterForm/>}/>
          
         
          <Route
            path="login"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <SecondPage />
              </Suspense>
            }
          />

          <Route
            path="balance"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <h1>Balance Page</h1>
              </Suspense>
            }
          />

          <Route
            path="reports"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <h1>Reports Page</h1>
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
