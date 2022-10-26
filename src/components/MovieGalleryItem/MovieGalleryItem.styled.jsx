import styled from 'styled-components';

export const ImageMovie = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
`;

export const InfoMovie = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  text-decoration: none;
  opacity: 0;
  transform: translate(30px);
  transition: 0.5s;
  h3 {
    margin: 0;
    font-size: 20px;
  }
  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
`;

export const CardMovie = styled.li`
  display: flex;
  align-items: flex-end;
  min-height: 400px;
  border-radius: 15px;
  padding: 15px;
  background: white;
  position: relative;
  transition: 0.4s ease-out;
  box-shadow: #090909;
  &:hover {
    transform: translateY(10px);
    &:before {
      opacity: 1;
    }
    ${InfoMovie} {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(22, 22, 22, 0.8);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
`;
