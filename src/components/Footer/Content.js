import styled from 'styled-components';

const Content = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 20px;
 justify-items: start;
 max-width: 425px;
 margin: 0 auto;

 @media (min-width: 1024px) {
  grid-template-columns: 425px 1fr repeat(4, auto);
  justify-items: end;
  max-width: none;
 }
`;

export default Content;
