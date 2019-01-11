import PropTypes from 'prop-types';
import React from 'react';
import { AStyled, LinkStyled, NavLinkStyled } from './Link.styles';

const Link = props => {
  const { type } = props;

  if (type === 'a') {
    return <AStyled {...props} />;
  }

  if (type === 'nav') {
    return <NavLinkStyled {...props} />;
  }

  return <LinkStyled {...props} />;
};

Link.defaultProps = {
  type: 'link',
};

Link.propTypes = {
  type: PropTypes.string,
};

export default Link;
