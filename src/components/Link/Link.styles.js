import styled, { css } from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

const defaultStyles = css`
  color: #1d97ff;
  text-decoration: none;
  &:visited {
    color: #125d9c;
  }

  &:hover {
    text-decoration: underline;
  }

  ${props =>
    props.large &&
    css`
      font-size: 18px;
    `}
`;

const NavLinkStyled = styled(RouterNavLink)`
  ${defaultStyles}
`;

const LinkStyled = styled(RouterLink)`
  ${defaultStyles}
`;

const AStyled = styled.a`
  ${defaultStyles}
`;

export { LinkStyled, NavLinkStyled, AStyled };
