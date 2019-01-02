import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from '../../components/Link';

class SubList extends React.Component {
  render() {
    const { sub } = this.props;

    return (
      <ul>
        {sub.map((item, index) => (
          <li key={index}>
            <Link to={`/r/${item}`}>{item}</Link>{' '}
          </li>
        ))}
      </ul>
    );
  }
}

SubList.propTypes = {
  sub: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  sub: state.sub,
}))(SubList);
