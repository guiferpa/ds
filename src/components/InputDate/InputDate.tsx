import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fluid?: boolean;
  label?: string;
  onValidate?: (err: Error, ref: React.MutableRefObject<HTMLInputElement>) => void;
  isRequired?: boolean
}

const inputResetStyle = () => css`
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

const mask = (value: string): string[] => {
  const DATE_MAX_SIZE = 8;

  const digits: string[] = value
    .replace("^\\s+$", "")
    .split("")
    .filter((digit: string) => !isNaN(parseInt(digit)))
    .slice(0, DATE_MAX_SIZE);

  const digitsMasked: string[] = digits.map((digit: string, idx: number) => {
    if (idx === 2 || idx === 4) return `/${digit}`;
    return digit;
  });

  return digitsMasked;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <StyledInputWrapper fluid={props.fluid}>
      {props.label && <StyledInputLabel> {props.label} </StyledInputLabel>}
      <StyledInput {...props} ref={ref} placeholder='__/__/____' />
    </StyledInputWrapper>
  );
});

export default Input;
