import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const buttonResetStyle = (props: ButtonProps) => css`
  border: none;
  margin: 0;
`

const buttonBaseStyle = (props: ButtonProps) => css`
  &:hover {
    cursor: pointer;
  }
`

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} >{props.label}</button>
  );
}

const ButtonStyled = styled(Button)<ButtonProps>(
  buttonResetStyle,
  buttonBaseStyle
);

export default ButtonStyled;
