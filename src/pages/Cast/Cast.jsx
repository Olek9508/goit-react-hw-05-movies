import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from 'services/api';
import {
  CastList,
  CastItem,
  CastTitle,
  CastText,
  CastSpan,
} from './Cast.styled';
// import defaultImg from '../../components/Images/defaultImg.jpg';
import {MovieContainer} from '../MovieDetails/MovieDetails.styled';

export default function Cast() {
  const [casts, setCasts] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    moviesApi.getCast(movieId)
    .then(response => setCasts(response.cast));
  }, [movieId]);

  const viewPoster = profile_path => {
    if (profile_path === null) {
      // return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };

  return (
    <>
      <MovieContainer />
      {casts && (
        <CastList>
          {casts.map(({id, profile_path, name, character}) => (
            <CastItem key={id}>
              <img
                src={`${viewPoster(profile_path) }`}
                alt={name}
                width='300'
              />
              <CastTitle>{name}</CastTitle>
              <CastText>
                {' '}
                Character : <CastSpan>
                  {' '}
                  {character}{' '}
                </CastSpan>{' '}
              </CastText>
            </CastItem>
          ))}
        </CastList>
      )
      }
    </>
  )
}