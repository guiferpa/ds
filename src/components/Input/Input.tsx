import React from 'react';
import styled, { css } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fluid?: boolean;
}

const inputResetStyle = (props: InputProps) => css`
  border: none;
  margin: 0;
`

const inputBaseStyle = (props: InputProps) => css`
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  border-width: ${({ theme }) => theme.border.size.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.brand.color.light.dark};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  font-size: ${({ theme }) => theme.typography.size.md};
  min-width: 200px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.color.primary.pure};
  }
`

const inputFluidStyle = (props: InputProps) => props.fluid && css`
  width: 100%;
`

const StyledInput = styled.input(
  inputResetStyle,
  inputBaseStyle,
  inputFluidStyle
);

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  return (
    <StyledInput {...props} />
  );
}

export default Input;
