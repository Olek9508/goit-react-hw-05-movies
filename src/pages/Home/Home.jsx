import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Header from "components/Header/Header";
import * as moviesApi from 'services/api';
import {
  List,
  Item,
  Text,
} from './Home.styled';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState('');

  useEffect(() => {
    moviesApi.getTrending().then(response => setMovies(response.results));
  }, []);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  return (
    <>
      <Header text='TRENDING TODAY' />
      {movies && (
        <List>
          {movies.map(({id, poster_path, title}) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location}>
                <Item>
                  <img
                    src={`${viewPoster(poster_path)}`}
                    alt={title}
                    width="300"
                    height="450"
                  />
                  <Text>{title}</Text>
                </Item>
              </Link>
            </li>
          ))}
        </List>
      )}
    </>
  )
}