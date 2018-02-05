import React from 'react';
import Wrapper from './Wrapper';
import Container from '../../layouts/Container';
import Menu from './Menu';
import Nav from './Nav';
import Button from './Button';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { open } = this.state;

    return (
      <Wrapper>
        <Container>
          <Menu onClick={this.toggleMenu}>Menu</Menu>
          <Nav {...{open}}>
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
