import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CgSpinnerAlt } from 'react-icons/cg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  tertiary?: boolean;
  fluid?: boolean;
  isLoading?: boolean;
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

const buttonDisabledStyle = (props: ButtonProps) => props.disabled && css`
  pointer-events: none;
  color: ${({ theme }) => theme.brand.color.light.pure};
  background-color: ${({ theme }) => theme.brand.color.light.dark};
  border-color: ${({ theme }) => theme.brand.color.light.dark};
`

const buttonIsLoadingStyle = (props: ButtonProps) => props.isLoading && css`
  pointer-events: none;
  opacity: ${({ theme }) => theme.opacity.intensity.four};
`

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const CgSpinnerAltStyled = styled(CgSpinnerAlt)`
  display: inline-block;
  animation: ${spinnerAnimation} 1s linear infinite;
`

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { disabled, isLoading, label } = props;

  return (
    <button 
      {...props}
      disabled={disabled || isLoading}
    >
      {!isLoading && label}
      {isLoading && <CgSpinnerAltStyled />}
    </button>
  );
};

const StyledButton = styled(Button)<ButtonProps>(
  buttonResetStyle,
  buttonBaseStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
  buttonTertiaryStyle,
  buttonFluidStyle,
  buttonDisabledStyle,
  buttonIsLoadingStyle
);


export default StyledButton;
