import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Layout from '../../components/Layout';
import P from '../../components/Paragraph';
import { H1 } from '../../components/Heading';

const Home = ({ sub }) => {
  if (sub.length) {
    const randomSub = sub[Math.floor(Math.random() * sub.length)];
    return <Redirect push to={`/r/${randomSub}`} />;
  }

  return (
    <>
      <Layout
        column2={
          <>
            <H1>Casually read the most popular posts on selected subreddits</H1>
            <P>Only posts above a certain popularity are shown and then sorted by date.</P>
            <P>Visited links are slighty darker.</P>
          </>
        }
      />
    </>
  );
};

Home.propTypes = {
  sub: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  sub: state.sub,
}))(Home);
