import PropTypes from 'prop-types';
import React from 'react';
import { Column1, Column2, Wrapper } from './Layout.styles';

const Layout = ({ column1, column2 }) => (
  <Wrapper>
    {column1 && <Column1>{column1}</Column1>}
    {column2 && <Column2>{column2}</Column2>}
  </Wrapper>
);

Layout.defaultProps = {
  column1: null,
  column2: null,
};

Layout.propTypes = {
  column1: PropTypes.node,
  column2: PropTypes.node,
};

export default Layout;
