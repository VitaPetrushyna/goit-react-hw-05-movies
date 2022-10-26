import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled.span`
  background-color: #efefef;
  padding-left: 5px;
  margin: 10px 0;
  display: flex;
`;

export const StyledList = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
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
export const Reviews = styled.div`
  background-color: #efefef;
  width: 100px;
  padding: 3px;
  margin-right: 5px;
`;
export const Cast = styled.div`
  background-color: #efefef;
  width: 100px;
  padding: 3px;
`;
