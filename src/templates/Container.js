import styled from 'styled-components';
import posed from 'react-pose';

const PosedContainer = posed.div({
 enter: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 1000 } },
 exit: { opacity: 0, y: 50 },
});

const Container = styled(PosedContainer)`
 max-width: 800px;
 background: white;
 padding: 30px;
 box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

 .gatsby-resp-image-link {
  background-image: none;
 }

 p:last-child {
  margin-bottom: 0;
 }

 @media (min-width: 800px) {
  min-width: 800px;
  margin: 50px auto;
  padding: 50px;
 }
`;

export default Container;
