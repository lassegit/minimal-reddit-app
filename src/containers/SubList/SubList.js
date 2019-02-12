import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import { Li, Ul } from './SubList.styles';

const SubList = ({ subs }) => (
  <Ul>
    {subs.map((item, index) => (
      <Li key={index}>
        <Link to={`/r/${item}`} large="true">
          {item}
        </Link>{' '}
      </Li>
    ))}
  </Ul>
);

SubList.propTypes = {
  subs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  subs: state.sub,
}))(SubList);
