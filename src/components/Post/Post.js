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

const Meta = styled.div`
  display: block;
  margin: 5px 0;
  font-size: 12px;
`;

const Post = ({ post, index }) => {
  const { url, title, created_utc, domain, permalink, author } = post; // eslint-disable-line camelcase
  // eslint-disable-next-line camelcase
  const createdAt = new Date(created_utc * 1000).toLocaleDateString(navigator.language || navigator.userLanguage, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Wrapper>
      <A href={url} target="_blank" large>
        {index + 1}: {title}
      </A>{' '}
      <A href={`https://www.reddit.com/domain/${domain}/`}>
        <small>{domain}</small>
      </A>
      <Meta>
        {createdAt} <A href={`https://www.reddit.com${permalink}`}>comments</A>{' '}
        <A href={`https://www.reddit.com/user/${author}`}>{author}</A>{' '}
      </Meta>
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
