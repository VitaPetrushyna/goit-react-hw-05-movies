import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SerchBar.styled';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const query = form.elements.query.value;

    onSubmit(query);
    // setQuery();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchIcon />
        </SearchFormButton>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
      </SearchForm>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
