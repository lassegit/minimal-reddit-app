/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import P from '../../components/Paragraph';
import SubAdd from '../SubAdd';
import SubList from '../SubList';
import { getComments } from '../../redux/actions/comment';
import { H3 } from '../../components/Heading';
import { Li, Ul } from './Comments.styles';

class Comments extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getComments(match.params.sub, match.params.id));
  }

  render() {
    const { comments, post, isLoading, error } = this.props;

    if (isLoading || error)
      return (
        <Layout
          column1={
            <React.Fragment>
              <SubAdd /> <SubList />
            </React.Fragment>
          }
          column2={
            <React.Fragment>
              <P>{isLoading && 'Loading comments…'}</P>
              <P>{error && error}</P>
            </React.Fragment>
          }
        />
      );

    const { title, permalink, num_comments } = post;

    return (
      <Layout
        column1={
          <React.Fragment>
            <SubAdd /> <SubList />
          </React.Fragment>
        }
        column2={
          <React.Fragment>
            <H3>{title}</H3>
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
          </React.Fragment>
        }
      />
    );
  }
}

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
