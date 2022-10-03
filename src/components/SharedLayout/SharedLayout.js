import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
}
