import React from 'react';
import { injectGlobal } from 'styled-components';
import Helmet from 'react-helmet';
import Site from './Site';
import Footer from '../Footer';
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
  .gatsby-highlight pre[class*="language-"], .gatsby-highlight code[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    white-space: pre-wrap;
  }

  /**
  * Wementions
  */
  #webmentions {
    margin-top: 30px;
    position: relative;
    z-index: 100;
    line-height: 1.2em;
  }

  #webmentions .comments {
    max-height: 20em;
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 80%;
  }

  #webmentions h2 {
    font-size: medium;
    margin: 0;
    padding: 2px;
  }

  #webmentions .reacts img {
    margin: 3px -1ex 1px 0;
  }

  #webmentions ul {
    list-style-type: none;
    margin: 0;
    padding: 4px;
  }

  #webmentions li {
    text-indent: -1em;
    padding-left: 1em;
  }

  #webmentions a.reaction {
    position: relative;
    text-decoration: none;
    text-shadow: 0px 0px 3px white;
    margin-right: 0;
    letter-spacing: -1ex;
    margin-right: 1ex;
    background-image: none;
  }

  #webmentions a.reaction img {
    max-height: 1.3em;
    margin-right: -1ex;
    border-radius: 25%;
  }

  #webmentions a.reaction sub {
    font-size: 50%;
  }

  #webmentions .comments li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  #webmentions .comments li .text {
    color: #555;
    font-style: italic;
    text-decoration: none;
  }

  #webmentions .comments li .name {
    color: #111;
  }
`;

class Layout extends React.Component {
  render() {
    const { children, location } = this.props;
    return (
      <Site>
        <Helmet>
          <link
            rel="webmention"
            href="https://webmention.io/jamespettifer.com/webmention"
          />
          <link
            rel="pingback"
            href="https://webmention.io/jamespettifer.com/xmlrpc"
          />
        </Helmet>
        {children}
        <Footer {...{ location }} />
      </Site>
    );
  }
}

export default Layout;
