import React from 'react';
import styled, { css } from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';

export interface AlertProps {
  title?: string;
  message: string;
  warning?: boolean;
  failure?: boolean;
  success?: boolean;

  onClose?: () => void;
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
  color: ${({ theme }) => theme.brand.color.light.pure};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
  
  const alertDefaultStyle = () => css`
  border-color: ${({ theme }) => theme.brand.color.primary.dark};
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
`

const alertWarningStyle = (props: AlertProps) => props.warning && css`
  border-color: ${({ theme }) => theme.brand.color.feedback.warning.dark};
  background-color: ${({ theme }) => theme.brand.color.feedback.warning.pure};
`

const alertFailureStyle = (props: AlertProps) => props.failure && css`
  border-color: ${({ theme }) => theme.brand.color.feedback.failure.dark};
  background-color: ${({ theme }) => theme.brand.color.feedback.failure.pure};
`

const alertSuccessStyle = (props: AlertProps) => props.success && css`
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

const StyledAlertContentWrapper = styled.div({});

const alertTitleResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const alertTitleBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.size.xs};
`

const StyledAlertTitle = styled.h1(
  alertTitleResetStyle,
  alertTitleBaseStyle
);

const StyledAlertMessage = styled.span({});

const alertCloseButtonResetStyle = () => css``

const alertCloseButtonBaseStyle = () => css`
  color: ${({ theme }) => theme.brand.color.light.pure};
  border-radius: ${({ theme }) => theme.border.radius.xs};
  width: 20px;

  @media (max-width: 768px) {
    width: 50px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.dark};
  }
`

const StyledAlertCloseButton = styled(Close)(
  alertCloseButtonResetStyle,
  alertCloseButtonBaseStyle
);

const Alert: React.FunctionComponent<AlertProps> = (props) => {
  return (
    <StyledAlert {...props}>
      <StyledAlertContentWrapper>
        {props.title && <StyledAlertTitle>{props.title}</StyledAlertTitle>}
        <StyledAlertMessage>
          {props.message}
        </StyledAlertMessage>
      </StyledAlertContentWrapper>
      <StyledAlertCloseButton onClick={() => {
        props.onClose && props.onClose();
      }} />
    </StyledAlert>
  );
}

export default Alert;
