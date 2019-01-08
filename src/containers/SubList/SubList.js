import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from '../../components/Link';

const UL = styled.ul`
  list-style: none;
  padding: 0;
`;

const LI = styled.li`
  margin: 0 0 5px 0;
`;

class SubList extends React.Component {
  render() {
    const { sub } = this.props;

    return (
      <UL>
        {sub.map((item, index) => (
          <LI key={index}>
            <Link to={`/r/${item}`} large="true">
              {item}
            </Link>{' '}
          </LI>
        ))}
      </UL>
    );
  }
}

SubList.propTypes = {
  sub: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => ({
  sub: state.sub,
}))(SubList);
