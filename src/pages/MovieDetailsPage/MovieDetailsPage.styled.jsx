import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled.button`
  background-color: #efefef;
  padding: 5px;
  margin-top: 20px;
  width: 200px;
  border: solid 1px gray;
`;

export const StyledList = styled(NavLink)`
  color: black;

  &.active {
    color: #3876fc;
  }

  :hover:not(.active),
  :focus-visible:host(.active) {
    color: #3b3be3;
  }
`;
export const Additional = styled.div`
  border: #efefef 3px solid;
  padding-left: 5px;
  padding-bottom: 5px;
`;
export const AdditionalNav = styled.div`
  display: flex;
`;
export const Reviews = styled.button`
  background-color: #efefef;
  width: 200px;
  padding: 5px;
  margin-right: 5px;
  border: solid 1px gray;
`;
export const Cast = styled.button`
  background-color: #efefef;
  width: 200px;
  padding: 5px;
  border: solid 1px gray;
`;
