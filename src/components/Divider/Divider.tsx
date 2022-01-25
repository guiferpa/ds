import React from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps {
  size?: string;
}

const dividerResetStyle = () => css`
  border: 0;
`

const dividerBaseStyle = (props: DividerProps) => css`
  border-top: solid ${({ theme }) => `${theme.border.size.sm} ${theme.brand.color.light.dark}`};
  margin: ${({ theme }) => theme.spacing.size.xs} 0;
  width: ${props.size || "100%"};
`

const StyledDivider = styled.div(
  dividerResetStyle,
  dividerBaseStyle
);

const Divider: React.FunctionComponent<DividerProps> = (props) => {
  return (
    <StyledDivider {...props} />
  );
}

export default Divider;
