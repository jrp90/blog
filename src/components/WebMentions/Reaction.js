import React, { Component } from 'react';

class Reaction extends Component {
  constructor(props) {
    super(props);

    this.reactTitle = {
      'in-reply-to': 'replied',
      'like-of': 'liked',
      'repost-of': 'reposted',
      'bookmark-of': 'bookmarked',
      'mention-of': 'mentioned',
      rsvp: 'RSVPed',
      'follow-of': 'followed',
    };

    this.reactEmoji = {
      'in-reply-to': '💬',
      'like-of': '❤️',
      'repost-of': '🔄',
      'bookmark-of': '⭐️',
      'mention-of': '💬',
      rsvp: '📅',
      'follow-of': '🐜',
    };

    this.rsvpEmoji = {
      yes: '✅',
      no: '❌',
      interested: '💡',
      maybe: '💭',
    };

    this.stripurl = this.stripurl.bind(this);
  }

  // strip the protocol off a URL
  stripurl(url) {
    return url.substr(url.indexOf('//'));
  }

  render() {
    const { reaction } = this.props;

    const who =
      reaction.author && reaction.author.name
        ? reaction.author.name
        : reaction.url.split('/')[2];
    const response = this.reactTitle[reaction['wm-property']] || 'reacted';

    return (
      <a
        className="reaction"
        rel="nofollow"
        title={`${who} ${response}`}
        href={reaction.url}
      >
        {reaction.author &&
          reaction.author.photo && (
            <img src={reaction.author.photo} alt={who} />
          )}
        {this.reactEmoji[reaction['wm-property']] || '💥'}
        {reaction.rsvp &&
          this.rsvpEmoji[reaction.rsvp] && (
            <sub>{this.rsvpEmoji[reaction.rsvp]}</sub>
          )}
      </a>
    );
  }
}

export default Reaction;
