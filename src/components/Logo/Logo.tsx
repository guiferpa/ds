import React from 'react';
import styled, { css } from 'styled-components';

export interface LogoProps {}

/*
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
*/

const StyledLogoWrapper = styled.div({});

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <StyledLogoWrapper>

    </StyledLogoWrapper>
  );
}

export default Logo;
