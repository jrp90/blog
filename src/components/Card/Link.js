import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  box-shadow: none;
  background-image: none;

  &:hover {
    & > div {
      transform: scale(1.05);
      transition: all 300ms ease;
    }
  }
`;

export default StyledLink;