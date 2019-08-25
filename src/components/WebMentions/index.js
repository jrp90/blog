import React, { Component } from 'react';
import Reaction from './Reaction';
import Comment from './Comment';
import Wrapper from './Wrapper';

class WebMentions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      collects: [],
    };

    this.stripurl = this.stripurl.bind(this);
    this.dedupe = this.dedupe.bind(this);
  }

  // strip the protocol off a URL
  stripurl(url) {
    return url.substr(url.indexOf('//'));
  }

  // Deduplicate multiple mentions from the same source URL
  dedupe(mentions) {
    const filtered = [];
    const seen = {};

    mentions.forEach(r => {
      // Strip off the protocol (i.e. treat http and https the same)
      const source = this.stripurl(r.url);
      if (!seen[source]) {
        filtered.push(r);
        seen[source] = true;
      }
    });

    return filtered;
  }

  componentDidMount() {
    const refUrl = window.location.href.replace(/#.*$/, '');
    const pageUrl = this.stripurl(refUrl);

    const apiURL = `https://webmention.io/api/mentions.jf2?target[]=${encodeURIComponent(
      `http:${pageUrl}`
    )}&target[]=${encodeURIComponent(`https:${pageUrl}`)}`;

    const comments = [];
    const collects = [];

    const mapping = {
      'in-reply-to': comments,
      'like-of': collects,
      'repost-of': collects,
      'bookmark-of': collects,
      'mention-of': comments,
      rsvp: comments,
    };

    fetch(apiURL)
      .then(r => r.json())
      .then(data => {
        data.children.forEach(function(c) {
          const store = mapping[c['wm-property']];
          if (store) store.push(c);
        });

        this.setState({
          comments: this.dedupe(comments),
          collects: this.dedupe(collects),
        });
      });
  }

  render() {
    const { comments, collects } = this.state;

    return (
      <Wrapper>
        {!!collects.length && (
          <>
            <h2>
              {collects.length} Reaction
              {collects.length > 1 ? 's' : ''}
            </h2>
            <ul className="reacts">
              {collects.map(reaction => (
                <Reaction {...{ reaction, key: reaction.url }} />
              ))}
            </ul>
          </>
        )}
        {!!comments.length && (
          <>
            <h2>
              {comments.length} Comment
              {comments.length > 1 ? 's' : ''}
            </h2>
            <ul className="comments">
              {comments.map(comment => (
                <li key={comment.url}>
                  <Comment {...{ comment }} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Wrapper>
    );
  }
}

export default WebMentions;
