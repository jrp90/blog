/* webmention.js
Simple thing for embedding webmentions from webmention.io into a page, client-side.
(c)2018 fluffy (http://beesbuzz.biz)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
GitHub repo (for latest released versions, issue tracking, etc.):
    http://github.com/PlaidWeb/webmention.js
*/

(function() {
  const refurl =
    document.currentScript.getAttribute('data-page-url') ||
    window.location.href.replace(/#.*$/, '');
  const containerID =
    document.currentScript.getAttribute('data-id') || 'webmentions';
  const textMaxWords = document.currentScript.getAttribute('data-wordcount');

  const reactTitle = {
    'in-reply-to': 'replied',
    'like-of': 'liked',
    'repost-of': 'reposted',
    'bookmark-of': 'bookmarked',
    'mention-of': 'mentioned',
    rsvp: 'RSVPed',
    'follow-of': 'followed',
  };

  const reactEmoji = {
    'in-reply-to': '💬',
    'like-of': '❤️',
    'repost-of': '🔄',
    'bookmark-of': '⭐️',
    'mention-of': '💬',
    rsvp: '📅',
    'follow-of': '🐜',
  };

  const rsvpEmoji = {
    yes: '✅',
    no: '❌',
    interested: '💡',
    maybe: '💭',
  };

  function reactImage(r) {
    const who = r.author && r.author.name ? r.author.name : r.url.split('/')[2];
    const response = reactTitle[r['wm-property']] || 'reacted';
    let html =
      '<a class="reaction" rel="nofollow" title="' +
      who +
      ' ' +
      response +
      '" href="' +
      r.url +
      '">';
    if (r.author && r.author.photo) {
      html += '<img src="' + r.author.photo + '">';
    }
    html += reactEmoji[r['wm-property']] || '💥';
    if (r.rsvp && rsvpEmoji[r.rsvp]) {
      html += '<sub>' + rsvpEmoji[r.rsvp] + '</sub>';
    }
    html += '</a>';

    return html;
  }

  // strip the protocol off a URL
  function stripurl(url) {
    return url.substr(url.indexOf('//'));
  }

  // Deduplicate multiple mentions from the same source URL
  function dedupe(mentions) {
    const filtered = [];
    const seen = {};

    mentions.forEach(function(r) {
      // Strip off the protocol (i.e. treat http and https the same)
      const source = stripurl(r.url);
      if (!seen[source]) {
        filtered.push(r);
        seen[source] = true;
      }
    });

    return filtered;
  }

  function formatComments(comments) {
    let html =
      '<h2>' +
      comments.length +
      ' Response' +
      (comments.length > 1 ? 's' : '') +
      '</h2><ul class="comments">';
    comments.forEach(function(c) {
      html += '<li>';

      html += reactImage(c);

      html += ' <a class="source" rel="nofollow" href="' + c.url + '">';
      if (c.author && c.author.name) {
        html += c.author.name;
      } else {
        html += c.url.split('/')[2];
      }
      html += '</a>: ';

      let linkclass, linktext;
      if (c.name) {
        linkclass = 'name';
        linktext = c.name;
      } else if (c.content && c.content.text) {
        var words = c.content.text;
        if (textMaxWords) {
          var words = c.content.text
            .replace(/\s+/g, ' ')
            .split(' ', textMaxWords + 1);
          if (words.length > textMaxWords) {
            words[textMaxWords - 1] += '&hellip;';
            words = words.slice(0, textMaxWords);
          }
          words = words.join(' ');
        }

        linkclass = 'text';
        linktext = words;
      } else {
        linkclass = 'name';
        linktext = '(mention)';
      }

      html +=
        '<span class="' +
        linkclass +
        '" href="' +
        c.url +
        '">' +
        linktext +
        '</span>';

      html += '</li>';
    });
    html += '</ul>';

    return html;
  }

  function formatReactions(reacts) {
    let html =
      '<h2>' +
      reacts.length +
      ' Reaction' +
      (reacts.length > 1 ? 's' : '') +
      '</h2><ul class="reacts">';

    reacts.forEach(function(r) {
      html += reactImage(r);
    });

    return html;
  }

  function getData(url, callback) {
    if (fetch) {
      fetch(url)
        .then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          } else {
            return Promise.reject(new Error(response.statusText));
          }
        })
        .then(function(response) {
          return response.json();
        })
        .then(callback)
        .catch(function(error) {
          console.error('Request failed', error);
        });
    } else {
      const oReq = new XMLHttpRequest();
      oReq.onload = function(data) {
        callback(JSON.parse(data));
      };
      oReq.onerror = function(error) {
        console.error('Request failed', error);
      };
    }
  }

  window.addEventListener('load', function() {
    const container = document.getElementById(containerID);
    if (!container) {
      // no container, so do nothing
      return;
    }

    const pageurl = stripurl(refurl);

    const apiURL =
      'https://webmention.io/api/mentions.jf2?target[]=' +
      encodeURIComponent('http:' + pageurl) +
      '&target[]=' +
      encodeURIComponent('https:' + pageurl);

    getData(apiURL, function(json) {
      html = '';

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

      json.children.forEach(function(c) {
        const store = mapping[c['wm-property']];
        if (store) store.push(c);
      });

      // format the comment-type things
      if (comments.length > 0) {
        html += formatComments(dedupe(comments));
      }

      // format the other reactions
      if (collects.length > 0) {
        html += formatReactions(dedupe(collects));
      }

      container.innerHTML = html;
    });
  });
})();
