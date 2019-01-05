import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Layout from '../../components/Layout';
import SubAdd from '../SubAdd';
import SubList from '../SubList';
import { H1 } from '../../components/Heading';

export class Home extends React.Component {
  render() {
    const { sub } = this.props;

    if (sub.length) {
      const randomSub = sub[Math.floor(Math.random() * sub.length)];
      return <Redirect push to={`/r/${randomSub}`} />;
    }

    return (
      <React.Fragment>
        <Layout
          column1={
            <React.Fragment>
              <SubAdd /> <SubList />
            </React.Fragment>
          }
          column2={
            <React.Fragment>
              <H1>Add your favorite subreddits.</H1>
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  sub: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  sub: state.sub,
}))(Home);
