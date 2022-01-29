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

const mask = (value: string): string[] => {
  const CEP_MAX_SIZE = 8;

  const digits: string[] = value
    .replace("^\\s+$", "")
    .split("")
    .filter((digit: string) => !isNaN(parseInt(digit)))
    .slice(0, CEP_MAX_SIZE);

  const digitsMasked: string[] = digits.map((digit: string, idx: number) => {
    if (idx === 5) return `-${digit}`;
    return digit;
  });

  return digitsMasked;
}

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const [value, setValue] = React.useState<string>(props.defaultValue as string || "");

  return (
    <StyledInputWrapper fluid={props.fluid}>
      {props.label && <StyledInputLabel> {props.label} </StyledInputLabel>}
      <StyledInput {...props} placeholder='_____-___' value={value} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(mask(evt.target.value).join(""));
        props.onChange && props.onChange(evt);
      }} />
    </StyledInputWrapper>
  );
}

export default Input;
