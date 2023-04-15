import React, { Fragment, Suspense, lazy } from 'react';
import './app.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from './components/public/Loading';
import { useSelector } from 'react-redux';
import Home from './pages/Home';

const Auth = lazy(() => import('./pages/Auth'));

function App() {
  const token = !!useSelector(state => state.auth.token);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home isAuth={token} />} />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <Suspense fallback={<LoadingSpinner />}>
                <Auth isAuth={token} />
              </Suspense>
            )
          }
        />
        <Route
          path="/register"
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <Suspense fallback={<LoadingSpinner />}>
                <Auth isAuth={token} />
              </Suspense>
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Fragment>
  );
}

export default App;
