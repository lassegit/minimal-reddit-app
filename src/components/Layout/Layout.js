import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 0 50px 0;
`;

const Column1 = styled.div`
  flex: 1;
`;

const Column2 = styled.div`
  flex: 5;
`;

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
