import React from 'react';
import styled, { css } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fluid?: boolean;
  label?: string;
}

const inputResetStyle = (props: InputProps) => css`
  border: none;
  margin: 0;
`

const inputBaseStyle = () => css`
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  border-width: ${({ theme }) => theme.border.size.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.brand.color.light.dark};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  font-size: ${({ theme }) => theme.typography.size.md};
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.color.primary.pure};
  }
`

const StyledInput = styled.input(
  inputResetStyle,
  inputBaseStyle
);

const StyledInputLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.size.xs};
`

interface InputWrapperProps {
  fluid?: boolean;
}

const inputWrapperBaseStyle = () => css`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const inputWrapperFluidStyle = (props: InputWrapperProps) => props.fluid && css`
  width: 100%;
`

const StyledInputWrapper = styled.div(
  inputWrapperBaseStyle,
  inputWrapperFluidStyle
)

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  return (
    <StyledInputWrapper fluid={props.fluid}>
      {props.label && <StyledInputLabel> {props.label} </StyledInputLabel>}
      <StyledInput {...props} />
    </StyledInputWrapper>
  );
}

export default Input;
