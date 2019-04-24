import PropTypes from 'prop-types';
import React from 'react';
import { AStyled, LinkStyled, NavLinkStyled } from './Link.styles';

const Link = ({ type, ...rest }) => {
  if (type === 'a') {
    return <AStyled {...rest} />;
  }

  if (type === 'nav') {
    return <NavLinkStyled {...rest} />;
  }

  return <LinkStyled {...rest} />;
};

Link.defaultProps = {
  type: 'link',
};

Link.propTypes = {
  type: PropTypes.string,
};

export default Link;
