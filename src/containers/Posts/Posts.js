import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import P from '../../components/Paragraph';
import Post from '../../components/Post';
import SubAdd from '../SubAdd';
import SubList from '../SubList';
import { getPosts } from '../../redux/actions/post';
import { H3 } from '../../components/Heading';
import { removeSub } from '../../redux/actions/sub';

class Posts extends React.Component {
  componentDidMount() {
    const { dispatch, match, sub } = this.props;
    const { id } = match.params;

    if (id !== sub) {
      dispatch(getPosts(id));
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, match, sub } = this.props;
    const { id } = match.params;

    if (id !== prevProps.match.params.id && id !== sub) {
      dispatch(getPosts(id));
    }
  }

  render() {
    const { match, isLoading, posts, dispatch, error } = this.props;

    return (
      <div>
        <Layout
          column1={
            <React.Fragment>
              <SubAdd /> <SubList />
            </React.Fragment>
          }
          column2={
            <React.Fragment>
              <H3>
                /r/{match.params.id} <Button onClick={() => dispatch(removeSub(match.params.id))}>Remove</Button>
              </H3>
              <P>{isLoading && 'Loading'}</P>
              <P>{error && error}</P>
              {!isLoading && posts.map((item, index) => <Post key={index} post={item.data} />)}
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

Posts.defaultProps = {
  error: null,
  sub: '',
};

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  sub: PropTypes.string,
  match: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default connect(state => ({
  posts: state.post.posts,
  sub: state.post.sub,
  isLoading: state.post.isLoading,
  error: state.post.error,
}))(Posts);
