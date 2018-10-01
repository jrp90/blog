import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
 box-shadow: none;
 background-image: none;

 &:hover {
  & > div {
   transform: scale(1.05);
   transition: all 200ms ease;
  }
 }
`;

export default StyledLink;
