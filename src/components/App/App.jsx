import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Box } from 'components/Box/Box';
import Footer from './Footer/Footer';
import { LoaderSpinner } from 'components/LoaderSpinner/LoadSpinner.styled';

const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Home = lazy(() => import('pages/Home/Home'));
const SearchMovie = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Box>
      <SharedLayout />
      <ToastContainer
        autoClose={5000}
      />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='movies' element={<><Outlet /></>}>
            <Route index element={<SearchMovie />}></Route>
            <Route path=':movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast />}></Route>
              <Route path='reviews' element={<Reviews />}></Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </Box>
  );
};