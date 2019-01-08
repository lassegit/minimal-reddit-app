/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import P from '../Paragraph';
import { A } from '../Link';

const Wrapper = styled.div`
  display: block;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px dashed #ddd;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: -10px 0 5px 0;
  font-size: 12px;
`;

const Li = styled.li`
  margin-right: 10px;
`;

const Comment = ({ comment }) => (
  <Wrapper>
    <P>{comment.body}</P>
    <Ul>
      <Li>
        <A href={`https://old.reddit.com/${comment.permalink}`} target="_blank">
          permalink
        </A>
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
