import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './SearchBar.styled';
import {toast} from 'react-toastify';

export default function FormSearch(props) {
  const [search, setSearch] = useState(props.search);

  const handleChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '')
      return toast.error('Enter your query');
    props.searchProps(search);
    setSearch('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SearchBtnLabel>
            Search
          </SearchBtnLabel>
        </SearchBtn>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies and videos"
          value={search}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBar>
  )
};

FormSearch.propTypes = {
  search: PropTypes.string,
  searchProps: PropTypes.func,
}