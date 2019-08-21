import React from 'react';
import Container from '../Container';
import Wrapper from './Wrapper';
import Social from './Social';
import Content from './Content';
import Bio from './Bio';
import james from './james.jpg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import github from './github.svg';
import rss from './rss.svg';

class Footer extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Wrapper>
        <Container>
          <Content className="h-card">
            <Bio>
              <img src={james} alt="James Pettifer" className="u-photo" />
              <p className="p-note">
                Hi, I'm <span className="p-name">James Pettifer</span>, a
                frontend web developer based in{' '}
                <span className="p-locality">Nottingham</span>,{' '}
                <span className="p-country-name">UK</span>
              </p>
              <a
                href={location.href}
                style={{ display: 'none' }}
                className="u-url u-uid"
              >
                https://jamespettifer.com
              </a>
            </Bio>
            <Social
              first
              href="https://www.instagram.com/jrp09u/"
              title="Instagram"
              target="_blank"
              rel="me"
            >
              <img src={instagram} alt="Instagram" />
              <p>@jrp09u</p>
            </Social>
            <Social
              href="https://twitter.com/jrp90"
              title="Twitter"
              target="_blank"
              rel="me"
            >
              <img src={twitter} alt="Twitter" />
              <p>@jrp90</p>
            </Social>
            <Social
              href="https://github.com/jrp90"
              title="Github"
              target="_blank"
              rel="me"
            >
              <img src={github} alt="Github" />
              <p>@jrp90</p>
            </Social>
            <Social href="/rss.xml" title="RSS Feed">
              <img src={rss} alt="RSS" />
              <p>RSS</p>
            </Social>
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
