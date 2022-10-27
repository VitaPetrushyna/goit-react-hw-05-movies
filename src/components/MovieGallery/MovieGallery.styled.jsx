import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100% - 30px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin: 20px auto;
  padding: 0;

  /* display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 15px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
`;

export const TitleHeader = styled.h2`
  color: white;
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, #070927, #3876fc);
  margin: 20px auto;
  height: 25px;
`;
