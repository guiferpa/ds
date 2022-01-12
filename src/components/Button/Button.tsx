import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const buttonBaseStyle = (props: ButtonProps) => css``

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} >{props.children}</button>
  );
}

const ButtonStyled = styled(Button)<ButtonProps>(
  buttonBaseStyle
);

export default ButtonStyled;
