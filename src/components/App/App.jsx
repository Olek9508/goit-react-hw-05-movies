import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from 'components/NavBar/NavBar';
import { Box } from 'components/Box/Box';
import Footer from 'components/Footer/Footer';
import Loader from 'components/LoaderSpinner/LoaderSpinner';


const NotFound = lazy(() => import('pages/NotFound'));
const Home = lazy(() => import('pages/Home/Home'));
const SearchMovie = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Box>
      <NavBar />
      <ToastContainer
        autoClose={5000}
      />
      <Suspense fallback={<Loader />}>
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