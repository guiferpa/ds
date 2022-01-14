import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  secondary?: boolean;
  tertiary?: boolean;
  fluid?: boolean;
}

const buttonResetStyle = () => css`
  border: none;
  margin: 0;
  text-decoration: none;
  display: inline-block;
`

const buttonBaseStyle = () => css`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  min-width: 160px;
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.md};
  border: solid ${({ theme }) => theme.border.size.sm} transparent;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const buttonPrimaryStyle = () => css`
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
  border: solid ${({ theme }) => `${theme.border.size.sm} ${theme.brand.color.primary.pure}`};

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

const buttonFluidStyle = (props: ButtonProps) => props.fluid && css`
  width: 100%;
`

const StyledButton = styled.button<ButtonProps>(
  buttonResetStyle,
  buttonBaseStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
  buttonTertiaryStyle,
  buttonFluidStyle
);

const Button = StyledButton;

export default Button;
