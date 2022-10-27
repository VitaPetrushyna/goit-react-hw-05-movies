import styled from 'styled-components';

export const Notice = styled.p`
  text-align: center;
  text-shadow: 5px 5px 5px #000000;
  font-size: 22px;
  font-weight: 400;
  font-style: italic;
`;

export const ReviewsList = styled.ul`
  list-style-type: disclosure-open;
  margin-left: 20px;
  & li {
    margin-bottom: 20px;
  }
  & li span {
    font-weight: 500;
  }
`;
