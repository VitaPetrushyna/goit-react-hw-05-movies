import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SerchBar.styled';
// import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast('What to show you?', {
        icon: '👏',
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchBarHeader>
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
    </SearchBarHeader>
  );
}
