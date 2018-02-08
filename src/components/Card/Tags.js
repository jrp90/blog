import styled from 'styled-components';

const Tags = styled.ul`
  color: #FF8400;
  text-transform: uppercase;
  font-family: 'Varela Round', sans-serif;
  font-size: 14px;
  margin: 5px 0 0;
  padding: 0;
  list-style-type: none;

  li {
    display: inline;
  }

  li:after {
    content: "|";
    margin: 0 8px;
  }

  li:last-child:after {
    content: "";
  }
`;

export default Tags;