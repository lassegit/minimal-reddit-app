/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { A } from '../Link';

const Wrapper = styled.div`
  display: block;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px dashed #ddd;
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 5px 0;
  font-size: 12px;
`;

const LI = styled.li`
  margin-right: 10px;
`;

const Post = ({ post, index }) => {
  const { url, title, created_utc, domain, permalink, author, num_comments } = post;
  const createdAt = new Date(created_utc * 1000).toLocaleDateString(
    navigator.language || navigator.userLanguage,
    {
      weekday: 'long',
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    },
  );

  return (
    <Wrapper>
      <A href={url} target="_blank" large>
        {title}
      </A>
      <UL>
        <LI>{createdAt}</LI>
        <LI>
          <A href={`https://old.reddit.com${permalink}`} target="_blank">
            comments ({num_comments})
          </A>
        </LI>
        <LI>
          <A href={`https://old.reddit.com/user/${author}`} target="_blank">
            {author}
          </A>
        </LI>
        <LI>
          <A href={`https://old.reddit.com/domain/${domain}/`}>{domain}</A>
        </LI>
      </UL>
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    domain: PropTypes.string,
    created_utc: PropTypes.number,
    author: PropTypes.string,
    permalink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
