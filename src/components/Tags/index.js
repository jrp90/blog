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
    const { handleTagClick, tags } = this.props;
    const { open } = this.state;

    return (
      <Wrapper>
        <Container>
          <Menu onClick={this.toggleMenu}>Menu</Menu>
          <Nav {...{open}}>
            <Button
              onClick={handleTagClick.bind(null, 'code')}
              selected={tags.includes('code')}>
              Code
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'photos')}
              selected={tags.includes('photos')}>
              Photos
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'travel')}
              selected={tags.includes('travel')}>
              Travel
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'tech')}
              selected={tags.includes('tech')}>
              Tech
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'fun')}
              selected={tags.includes('fun')}>
              Fun
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'books')}
              selected={tags.includes('books')}>
              Books
            </Button>
            <Button
              onClick={handleTagClick.bind(null, 'gaming')}
              selected={tags.includes('gaming')}>
              Gaming
            </Button>
          </Nav>
        </Container>
      </Wrapper>
    );
  }
};

export default Tags;
