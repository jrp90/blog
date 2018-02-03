import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

const Button = styled.button`
  background: white;
  border: 2px solid #FF8400;
  border-radius: 20px;
  margin: 0 ${rhythm(1/4)} ${rhythm(1/2)};
  padding: 3px 20px;
  color: #FF8400;
  cursor: pointer;
  font-family: 'Varela Round', sans-serif;

  &:hover {
    background: #FF8400;
    color: white;
  }
`;

export default Button;