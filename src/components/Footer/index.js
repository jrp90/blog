import React from 'react';
import Container from '../../layouts/Container';
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
    return (
      <Wrapper>
        <Container>
          <Content>
            <Bio>
              <img src={james} alt="James Pettifer"/>
              <p>Hi, I'm James, a frontend web developer based in Nottingham, UK</p>
            </Bio>
            <Social first href="https://www.instagram.com/jrp09u/" title="Instagram" target="_blank">
              <img src={instagram} alt="Instagram"/>
              <p>@jrp09u</p>
            </Social>
            <Social href="https://twitter.com/jrp90" title="Twitter" target="_blank">
              <img src={twitter} alt="Twitter"/>
              <p>@jrp90</p>
            </Social>
            <Social href="https://github.com/jrp90" title="Github" target="_blank">
              <img src={github} alt="Github"/>
              <p>@jrp90</p>
            </Social>
            <Social href="" title="">
              <img src={rss} alt="RSS"/>
              <p>RSS</p>
            </Social>
          </Content>
        </Container>
      </Wrapper>
    );
  }
};

export default Footer;
