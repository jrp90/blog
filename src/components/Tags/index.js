import React from 'react';
import Wrapper from './Wrapper';
import Container from '../../layouts/Container';
import Nav from './Nav';
import Button from './Button';

class Tags extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Nav>
            <Button>Code</Button>
            <Button>Photos</Button>
            <Button>Travel</Button>
            <Button>Tech</Button>
            <Button>Fun</Button>
            <Button>Books</Button>
            <Button>Gaming</Button>
          </Nav>
        </Container>
      </Wrapper>
    );
  }
};

export default Tags;
