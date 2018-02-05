import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

const Menu = styled.button`
  background: white;
  border: 2px solid #0083B2;
  border-radius: 20px;
  margin: ${rhythm(1/2)} ${rhythm(1/4)} ${rhythm(1/2)};
  padding: 3px 20px;
  color: #0083B2;
  cursor: pointer;
  font-family: 'Varela Round', sans-serif;

  &:hover {
    background: #0083B2;
    color: white;
  }

  @media(min-width: 800px) {
    display: none;
  }
`;

export default Menu;