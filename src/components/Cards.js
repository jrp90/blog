import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Cards = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  margin: ${rhythm(2)} 0;
`;

export default Cards;