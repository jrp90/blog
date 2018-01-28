import React from 'react';
import { injectGlobal } from 'styled-components';
import Site from './Site';
import Footer from '../components/Footer';

injectGlobal`
  html, body {
    min-height: 100vh;
  }

  body {
    background: #EEEEEE;
  }
`;

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Site>
        {children()}
        <Footer />
      </Site>
    );
  }
};

export default Template;
