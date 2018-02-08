import styled, { css } from 'styled-components';
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
  display: block;
  width: 130px;

  &:hover {
    background: #FF8400;
    color: white;
  }

  @media(min-width: 800px) {
    display: initial;
    width: auto;
  }

  ${props => props.selected && css`
    background: #FF8400;
    color: white;
  `}
`;

export default Button;