import React from 'react';
import styled, { css } from 'styled-components';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  secondary?: boolean;
  tertiary?: boolean;
}

const linkResetStyle = () => css`
  border: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

const linkBaseStyle = () => css`
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.md};

  &:hover {
    cursor: pointer;
  }

  &:active {
    text-decoration: underline;
  }
`

const linkPrimaryStyle = () => css`
  color: ${({ theme }) => theme.brand.color.primary.pure};

  &:hover {
    color: ${({ theme }) => theme.brand.color.primary.medium};
  }
`

const linkSecondaryStyle = (props: LinkProps) => props.secondary && css`
  color: ${({ theme }) => theme.brand.color.secondary.pure};

  &:hover {
    color: ${({ theme }) => theme.brand.color.secondary.medium};
  }
`

const linkTertiaryStyle = (props: LinkProps) => props.tertiary && css`
  color: ${({ theme }) => theme.brand.color.tertiary.pure};
  font-size: ${({ theme }) => theme.typography.size.md};

  &:hover {
    color: ${({ theme }) => theme.brand.color.tertiary.medium};
  }
`

const StyledLink = styled.a(
  linkResetStyle,
  linkBaseStyle,
  linkPrimaryStyle,
  linkSecondaryStyle,
  linkTertiaryStyle
);

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  return (
    <StyledLink {...props} >{props.children}</StyledLink>
  );
}

export default Link;
