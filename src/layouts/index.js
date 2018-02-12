import React from 'react';
import { injectGlobal } from 'styled-components';
import Site from './Site';
import Footer from '../components/Footer';
require('prismjs/themes/prism-solarizedlight.css');

injectGlobal`
  html, body {
    min-height: 100vh;
  }

  body {
    background: #EEEEEE;
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    white-space: pre-wrap;
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
