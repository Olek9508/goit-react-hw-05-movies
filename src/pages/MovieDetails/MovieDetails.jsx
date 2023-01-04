import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import Header from "components/Header/Header";
import GoToBackButton from "components/GoToBackButton/GoToBackButton";
import * as movieApi from 'api/Api';
import {
  MovieCardBox,
  MovieInfo,
  MovieLink,
  MovieTitleH2,
  MovieTitleH3,
} from './MovieDetails.styled';
import NotFound from '../NotFound/NotFound';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const {movieId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    movieApi.getMovieId(movieId)
      .then(response => setMovie(response));
  }, [movieId]);

  const movieScore = score => {
    return Math.floor(score * 10) + '%';
  };

  const movieGanres = genres => {
    if (genres === null) return;
    return genres.map(genre => genre.name).join(', ');
  };

  const onBtnClick = () => {
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <>
      {!movie ? (
        <NotFound />
      ) : (
        <>
          <Header text={`${movie.title}`} />
          <GoToBackButton
            onClick={onBtnClick}
            label={'GO BACK'}
            arrow={<ImArrowLeft size='30' fill='#7bd4eb'/>}
          />
          <MovieCardBox>
            <img
              src={`${viewPoster(movie.poster_path)}`}
              alt={movie.title}
              width='320'
            />
            <MovieInfo>
              <MovieTitleH2>{movie.title}</MovieTitleH2>
              <p> User Score: {`${movieScore(movie.vote_average)}`} </p>
              <MovieTitleH3>Overview</MovieTitleH3>
              <p>{movie.overview}</p>
              <MovieTitleH3>Genres</MovieTitleH3>
              <p>{`${movieGanres(movie.genres)}`}</p>
            </MovieInfo>
          </MovieCardBox>
          <Header text='Additional information' />
          <MovieLink to={`/movies/${movie.id}/cast`} state={location.state}>
            Cast
          </MovieLink>
          <MovieLink to={`/movies/${movie.id}/reviews`} state={location.state}>
            Reviews
          </MovieLink>
          <Outlet />
        </>
      )}
    </>
  )
}