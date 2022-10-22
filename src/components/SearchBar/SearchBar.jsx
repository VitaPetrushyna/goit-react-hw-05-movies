import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
// import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export default function Searchbar({ onSubmit }) {
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
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <SearchIcon />
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
