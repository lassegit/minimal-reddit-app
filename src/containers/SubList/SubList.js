import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import { Li, Ul } from './SubList.styles';

class SubList extends React.Component {
  render() {
    const { sub } = this.props;

    return (
      <Ul>
        {sub.map((item, index) => (
          <Li key={index}>
            <Link to={`/r/${item}`} large="true">
              {item}
            </Link>{' '}
          </Li>
        ))}
      </Ul>
    );
  }
}

SubList.propTypes = {
  sub: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  sub: state.sub,
}))(SubList);
