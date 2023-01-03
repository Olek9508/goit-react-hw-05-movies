import { useState, useEffect } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
 } from "react-router-dom";
import { toast } from 'react-toastify';
import FormSearch from "components/SearchBar/SearchBar";
 import Header from "components/Header/Header";
 import FindMe from "components/FindMe";
 import * as movieApi from 'services/api';
 import {
  List,
  Item,
  Text,
} from '../Home/Home.styled';

 export default function SearchMovie() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get('query') || ''
  );
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) return;

    movieApi.getMoviesSearch(search)
      .then(response => {
        if (response.results.length === 0) {
          return toast.info('Sorry, there are no more movies matching your search query!!!')
        }
        setMovies(response.results);
      })
  }, [search]);

  const formSubmit = search => {
    navigate(`/movies/?query=${search}`);
    setSearch(search);
    setMovies([]);
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  return (
    <>
      <Header text='SEARCH MOVIES' />
      <FormSearch searchProps={formSubmit} search={search} />
      {movies && movies.length > 0 ? (
        <List>
          {movies.map(({id, poster_path, title}) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                <Item>
                  <img
                    src={`${viewPoster(poster_path)}`}
                    alt={title}
                    width="300"
                    height="450"
                  />
                  <Text>{title}</Text>
                </Item>
              </NavLink>
            </li>
          ))}
        </List>
      ) : (
        <FindMe />
      )
      }
    </>
  )
 }