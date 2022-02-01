import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import * as Icon from '../Icon'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  secondary?: boolean;
  tertiary?: boolean;
  fluid?: boolean;
  isLoading?: boolean;
  icon?: React.ComponentType;
  dashed?: boolean;
  success?: boolean;
  danger?: boolean;
}

const buttonResetStyle = () => css`
  border: none;
  margin: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.size.xs};
`

const buttonBaseStyle = () => css`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  min-width: 160px;
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.md};
  border: solid ${({ theme }) => theme.border.size.sm} transparent;
  box-sizing: border-box;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.size.sm} ${theme.spacing.inset.sm}`};

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

const buttonDashedStyle = (props: ButtonProps) => props.dashed && css`
  border-style: dashed;
`

const buttonDangerStyle = (props: ButtonProps) => props.danger && css`
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  color: ${({ theme }) => theme.brand.color.feedback.failure.pure};

  ${!props.tertiary && (
    css`border-color: ${({ theme }) => theme.brand.color.feedback.failure.pure};`
  )}

  &:hover {
    ${!props.tertiary && (
      css`border-color: ${({theme}) => theme.brand.color.feedback.failure.dark};`
    )}
    color: ${({ theme }) => theme.brand.color.feedback.failure.dark};
    background-color: ${({ theme }) => theme.brand.color.feedback.failure.light};
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

const StyledButtonIconWrapper = styled.div``

const StyledButtonLabel = styled.span``

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { disabled, isLoading, label, icon: ButtonIcon, ...rest } = props;

  return (
    <button {...rest} disabled={disabled || isLoading} >
      {(ButtonIcon && !isLoading) && (
        <StyledButtonIconWrapper>
          <ButtonIcon />
        </StyledButtonIconWrapper>
      )}
      {!isLoading && <StyledButtonLabel>{label}</StyledButtonLabel>}
      {isLoading && (
        <StyledButtonIconWrapper>
          <Icon.SpinnerIcon loop />
        </StyledButtonIconWrapper>
      )}
    </button>
  );
};

const StyledButton = styled(Button)<ButtonProps>(
  buttonResetStyle,
  buttonBaseStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
  buttonTertiaryStyle,
  buttonDashedStyle,
  buttonDangerStyle,
  buttonFluidStyle,
  buttonDisabledStyle,
  buttonIsLoadingStyle
);


export default StyledButton;
