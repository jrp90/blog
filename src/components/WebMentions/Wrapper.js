import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  position: relative;
  z-index: 100;

  .comments {
    font-size: 80%;
  }

  .reacts img {
    margin: 3px -1ex 1px 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 4px;
  }

  li {
    text-indent: -1em;
    padding-left: 1em;
  }

  a.reaction {
    position: relative;
    text-decoration: none;
    text-shadow: 0px 0px 3px white;
    margin-right: 0;
    letter-spacing: -1ex;
    margin-right: 1ex;
    background-image: none;
  }

  a.reaction img {
    max-height: 2em;
    margin-right: -1ex;
    border-radius: 25%;
  }

  a.reaction sub {
    font-size: 50%;
  }

  .comments li .text {
    color: #555;
    font-style: italic;
    text-decoration: none;
  }

  .comments li .name {
    color: #111;
  }
`;

export default Wrapper;
