import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  secondary?: boolean;
  tertiary?: boolean;
}

const buttonResetStyle = (props: ButtonProps) => css`
  border: none;
  margin: 0;
`

const buttonBaseStyle = (props: ButtonProps) => css`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  min-width: 160px;
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.md};
  border: solid ${({ theme }) => theme.border.size.md} transparent;

  &:hover {
    cursor: pointer;
  }
`

const buttonPrimaryStyle = (props: ButtonProps) => css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
  border-radius: ${({ theme }) => theme.border.radius.sm};

  &:hover {
    background-color: ${({ theme }) => theme.brand.color.primary.medium};
  }
`

const buttonSecondaryStyle = (props: ButtonProps) => props.secondary && css`
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  color: ${({ theme }) => theme.brand.color.primary.pure};
  border: solid ${({ theme }) => `${theme.border.size.md} ${theme.brand.color.primary.pure}`};

  &:hover {
    color: ${({ theme }) => theme.brand.color.light.pure};
    background-color: ${({ theme }) => theme.brand.color.primary.medium};
  }
`

const buttonTertiaryStyle = (props: ButtonProps) => props.tertiary && css`
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  color: ${({ theme }) => theme.brand.color.primary.pure};

  &:hover {
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledButton = styled.button(
  buttonResetStyle,
  buttonBaseStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
  buttonTertiaryStyle
);

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton {...props} >{props.label}</StyledButton>
  );
}

export default Button;
