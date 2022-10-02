import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));

const ContactsPage = lazy(() => import('./Pages/ContactPage/ContactsPage'));

const Login = lazy(() => import('./Pages/LoginPage'));

const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));

export function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
