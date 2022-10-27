import styled from 'styled-components';

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin: 15px;
  padding: 0;
  list-style: none;
  & span {
    font-weight: 500;
    color: #444141;
  }
  & img {
    border-radius: 10px;
  }
`;

export const Notice = styled.p`
  text-align: center;
  text-shadow: 5px 5px 5px #000000;
  font-size: 22px;
  font-weight: 400;
  font-style: italic;
`;
