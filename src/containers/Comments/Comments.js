/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import P from '../../components/Paragraph';
import unescapeHTML from '../../utils/unescapeHTML';
import { CommentHTML } from '../../components/Comment/Comment.styles';
import { H3 } from '../../components/Heading';
import { Li, Ul } from './Comments.styles';

const Comments = ({ comments, post, isLoading, error, dispatch, match }) => {
  const { title, selftext_html, permalink, num_comments } = post;

  useEffect(() => {
    const { sub, id } = match.params;
    dispatch({ type: 'COMMENTS_REQUEST', sub, id });
  }, []);

  if (isLoading) {
    return <Layout column2={<P>Loading comments…</P>} />;
  }

  if (error) {
    return <Layout column2={<P>{error}</P>} />;
  }

  return (
    <Layout
      column2={
        <>
          <H3>{title}</H3>
          {selftext_html && <CommentHTML dangerouslySetInnerHTML={{ __html: unescapeHTML(selftext_html) }} />}
          <Ul>
            <Li>{num_comments} comments</Li>
            <Li>
              <Link href={`https://old.reddit.com/${permalink}`} target="_blank" type="a">
                permalink
              </Link>
            </Li>
          </Ul>
          {comments.map(comment => (
            <Comment key={comment.data.id} comment={comment.data} />
          ))}
        </>
      }
    />
  );
};

Comments.defaultProps = {
  error: null,
};

Comments.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default connect(state => ({
  comments: state.comment.comments,
  post: state.comment.post,
  isLoading: state.comment.isLoading,
  error: state.comment.error,
}))(Comments);
