import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

const Nav = styled.div`
  max-height: ${props => props.open ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 300ms ease;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: 800px) {
    padding: ${rhythm(1)} 0 ${rhythm(1/2)};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 500px;
  }
`;

export default Nav;