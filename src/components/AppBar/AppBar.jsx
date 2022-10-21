import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </>
  );
};
