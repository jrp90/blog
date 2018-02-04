import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  margin: 50px auto;
  background: white;
  padding: 50px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.1);

  .gatsby-resp-image-link {
    background-image: none;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export default Container;