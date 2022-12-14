import PropTypes from 'prop-types';
import { ButtonLoadMore } from './BtnLodMore.styled';

export const BtnLoadMore = ({ btnLoadMore }) => {
  return <ButtonLoadMore onClick={btnLoadMore}>Load more</ButtonLoadMore>;
};

BtnLoadMore.propTypes = {
  btnLoadMore: PropTypes.func.isRequired,
};
