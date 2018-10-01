import React from 'react';
import Wrapper from './Wrapper';
import Container from '../Container';
import Menu from './Menu';
import Nav from './Nav';
import Button from './Button';

class Tags extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   open: false,
  };

  this.toggleMenu = this.toggleMenu.bind(this);
 }

 toggleMenu() {
  this.setState(prevState => ({
   open: !prevState.open,
  }));
 }

 render() {
  const { handleTagClick, tag } = this.props;
  const { open } = this.state;

  return (
   <Wrapper>
    <Container>
     <Menu onClick={this.toggleMenu}>Menu</Menu>
     <Nav {...{ open }}>
      <Button
       onClick={handleTagClick.bind(null, 'code')}
       selected={tag === 'code'}
      >
       Code
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'photos')}
       selected={tag === 'photos'}
      >
       Photos
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'travel')}
       selected={tag === 'travel'}
      >
       Travel
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'tech')}
       selected={tag === 'tech'}
      >
       Tech
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'fun')}
       selected={tag === 'fun'}
      >
       Fun
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'books')}
       selected={tag === 'books'}
      >
       Books
      </Button>
      <Button
       onClick={handleTagClick.bind(null, 'gaming')}
       selected={tag === 'gaming'}
      >
       Gaming
      </Button>
     </Nav>
    </Container>
   </Wrapper>
  );
 }
}

export default Tags;
