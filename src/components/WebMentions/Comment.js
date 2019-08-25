import React, { Component } from 'react';
import Reaction from './Reaction';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.stripurl = this.stripurl.bind(this);
  }

  // strip the protocol off a URL
  stripurl(url) {
    return url.substr(url.indexOf('//'));
  }

  render() {
    const { comment } = this.props;

    return (
      <>
        <Reaction {...{ reaction: comment }} />
        <a className="source" rel="nofollow" href={comment.url}>
          {comment.author && comment.author.name
            ? comment.author.name
            : comment.url.split('/')[2]}
        </a>
        <p
          className={comment.content && comment.content.text ? 'text' : 'name'}
          href={comment.url}
        >
          {comment.content && comment.content.text
            ? comment.content.text
            : comment.name}
        </p>
      </>
    );
  }
}

export default Comment;
