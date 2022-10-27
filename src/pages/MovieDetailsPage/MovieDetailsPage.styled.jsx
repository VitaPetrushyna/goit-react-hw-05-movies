import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  padding: 5px;
  width: 200px;
  border: solid 1px gray;
  border-radius: 5px;
  background-color: #efefef;
  text-align: center;
  color: #3b3be3;
`;

export const StyledList = styled(NavLink)`
  background-color: #efefef;
  width: 200px;
  padding: 5px;
  margin-right: 5px;
  border: solid 1px gray;
  border-radius: 5px;
  text-align: center;
  color: #3b3be3;

  &.active {
    background-color: #3876fc;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:host(.active) {
    color: #3876fc;
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

// export const BackLink = styled(Link)`
//   ${buttonStyles}
// `;
