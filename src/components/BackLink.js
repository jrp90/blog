import styled from 'styled-components';
import { Link } from 'gatsby';

const BackLink = styled(Link)`
 display: flex;
 align-items: center;
 margin-bottom: 10px;
 background-image: none;
 color: hsla(0, 0%, 0%, 0.73);

 svg {
  width: 16px;
  height: 16px;
  margin-right: 10px;
 }

 span {
  font-family: 'Varela Round', sans-serif;
  font-weight: 300;
 }
`;

export default BackLink;
