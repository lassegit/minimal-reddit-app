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

const NavLink = styled(RouterNavLink)`
  ${defaultStyles}
`;

const Link = styled(RouterLink)`
  ${defaultStyles}
`;

const A = styled.a`
  ${defaultStyles}
`;

export { Link, NavLink, A };
