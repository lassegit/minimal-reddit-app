import PropTypes from 'prop-types';
import React from 'react';
import Link from '../Link';
import P from '../Paragraph';
import { Li, Ul, Wrapper } from './Comment.styles';

const Comment = ({ comment }) => (
  <Wrapper>
    <P>{comment.body}</P>
    <Ul>
      <Li>
        <Link href={`https://old.reddit.com/${comment.permalink}`} target="_blank" type="a">
          permalink
        </Link>
      </Li>
    </Ul>
  </Wrapper>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    url: PropTypes.string,
    body: PropTypes.string,
    body_html: PropTypes.string,
    domain: PropTypes.string,
    created_utc: PropTypes.number,
    author: PropTypes.string,
    permalink: PropTypes.string,
  }).isRequired,
};

export default Comment;
