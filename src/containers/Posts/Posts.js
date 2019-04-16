import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import P from '../../components/Paragraph';
import Post from '../../components/Post';
import { H3 } from '../../components/Heading';

const Posts = props => {
  const { match, isLoading, posts, dispatch, error } = props;
  const { id } = match.params;

  useEffect(
    () => {
      dispatch({ type: 'POSTS_REQUEST', payload: { id } });
    },
    [id],
  );

  if (isLoading) {
    return (
      <Layout
        column2={
          <H3>
            Loading posts from <i>{id}</i>
          </H3>
        }
      />
    );
  }

  return (
    <div>
      <Layout
        column2={
          <React.Fragment>
            <H3>
              /r/{id} <Button onClick={() => dispatch({ type: 'SUB_REMOVE', sub: id })}>Remove</Button>
            </H3>
            {error && <P>{error}</P>}
            {posts.map((item, index) => (
              <Post key={index} post={item.data} />
            ))}
          </React.Fragment>
        }
      />
    </div>
  );
};

Posts.defaultProps = {
  error: null,
};

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default connect(state => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
  error: state.post.error,
}))(Posts);
