import React from 'react';
import { injectGlobal } from 'styled-components';
import Site from './Site';
import Container from './Container';
import Footer from '../components/Footer';

injectGlobal`
  html, body {
    min-height: 100vh;
  }
`;

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Site>
        <Container>
          {children()}
        </Container>
        <Footer />
      </Site>
    );
  }
};

export default Template;
