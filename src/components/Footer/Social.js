import styled, { css } from 'styled-components';
// import { rhythm } from '../../utils/typography';

const Social = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: none;

  img {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    margin-bottom: 0;
  }

  p {
    font-family: 'Varela Round', sans-serif;
    margin-bottom: 0;
  }

  @media(min-width: 1024px) {
    ${props => props.first && css`
      grid-column: 3;
    `}
  }

  &:hover {
    img {
      transform: rotate(360deg) scale(1.1);
      transition: all 300ms ease;
    }
  }
`;

export default Social;