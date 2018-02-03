import styled from 'styled-components';
// import { rhythm } from '../../utils/typography';

const Bio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  grid-column: span 2;
  padding-bottom: 20px;
  border-bottom: 2px solid #EEEEEE;

  img {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-right: 12px;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }

  @media(min-width: 1024px) {
    justify-self: start;
    grid-column: span 1;
    padding: 0;
    border: 0;
  }
`;

export default Bio;