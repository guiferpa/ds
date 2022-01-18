import React from 'react';
import styled, { css } from 'styled-components';

export interface AlertProps {
  title?: string;
  message: string;
  warning?: boolean;
  failure?: boolean;
  success?: boolean;
}

const alertResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const alertBaseStyle = () => css`
  box-sizing: border-box;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.md};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  border-style: solid;
  border-width: ${({ theme }) => theme.border.size.md};
`

const alertDefaultStyle = () => css`
  color: ${({ theme }) => theme.brand.color.heavy.dark};
  border-color: ${({ theme }) => theme.brand.color.heavy.dark};
  background-color: ${({ theme }) => theme.brand.color.light.pure};
`

const alertWarningStyle = (props: AlertProps) => props.warning && css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  border-color: ${({ theme }) => theme.brand.color.feedback.warning.dark};
  background-color: ${({ theme }) => theme.brand.color.feedback.warning.pure};
`

const alertFailureStyle = (props: AlertProps) => props.failure && css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  border-color: ${({ theme }) => theme.brand.color.feedback.failure.dark};
  background-color: ${({ theme }) => theme.brand.color.feedback.failure.pure};
`

const alertSuccessStyle = (props: AlertProps) => props.success && css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  border-color: ${({ theme }) => theme.brand.color.feedback.success.dark};
  background-color: ${({ theme }) => theme.brand.color.feedback.success.pure};
`

const StyledAlert = styled.div(
  alertResetStyle,
  alertBaseStyle,
  alertDefaultStyle,
  alertWarningStyle,
  alertFailureStyle,
  alertSuccessStyle
);

const alertTitleResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const alertTitleBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const StyledAlertTitle = styled.h1(
  alertTitleResetStyle,
  alertTitleBaseStyle
);

const StyledAlertMessage = styled.span({});


const Alert: React.FunctionComponent<AlertProps> = (props) => {
  return (
    <StyledAlert {...props}>
      {props.title && <StyledAlertTitle>{props.title}</StyledAlertTitle>}
      <StyledAlertMessage>
        {props.message}
      </StyledAlertMessage>
    </StyledAlert>
  );
}

export default Alert;
