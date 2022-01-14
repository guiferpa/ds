import React from 'react';
import styled, { css } from 'styled-components';

export interface HeadingProps {
  bold?: boolean;
}

const headingResetStyle = () => css`
  border: none;
  margin: 0;
`

const headingBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
`

const headingBoldStyle = (props: HeadingProps) => props.bold && css`
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const StyledHeading = styled.h2(
  headingResetStyle,
  headingBaseStyle,
  headingBoldStyle
);

const Heading: React.FunctionComponent<HeadingProps> = (props) => {
  return (
    <StyledHeading {...props} >{props.children}</StyledHeading>
  );
}

export default Heading;
