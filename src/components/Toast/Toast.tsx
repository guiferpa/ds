import React from 'react';
import styled, { css } from 'styled-components';
import { CheckCircle, ErrorCircle, Error as Warning } from '@styled-icons/boxicons-solid';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  warning?: boolean;
  failure?: boolean;
  success?: boolean;

  onClose?: () => void;
}

/*
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
*/

const toastResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const toastBaseStyle = () => css`
  padding: ${({ theme }) => theme.spacing.inset.md};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 300px;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  border: solid ${({ theme }) => theme.border.size.sm} ${({ theme }) => theme.brand.color.heavy.pure};
`

const toastSuccessStyle = (props: ToastProps) => props.success && css`
  border-color: ${({ theme }) => theme.brand.color.feedback.success.pure};
`

const toastWarningStyle = (props: ToastProps) => props.warning && css`
  border-color: ${({ theme }) => theme.brand.color.feedback.warning.pure};
`

const toastFailureStyle = (props: ToastProps) => props.failure && css`
  border-color: ${({ theme }) => theme.brand.color.feedback.failure.pure};
`

const StyledToast = styled.div(
  toastResetStyle,
  toastBaseStyle,
  toastSuccessStyle,
  toastWarningStyle,
  toastFailureStyle

);

const toastHeaderResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const toastHeaderBaseStyle = () => css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  line-height: 25px;
`

const StyledToastHeader = styled.div(
  toastHeaderResetStyle,
  toastHeaderBaseStyle
);

const toastHeaderTitleResetStyle = () => css``

const toastHeaderTitleBaseStyle = () => css`
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const StyledToastHeaderTitle = styled.span(
  toastHeaderTitleResetStyle,
  toastHeaderTitleBaseStyle
);

const StyledToastBody = styled.div({});

const styledIconResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const styledIconBaseStyle = () => css`
  width: 25px;
  height: 25px;
`

const StyledSuccessIcon = styled(CheckCircle)(
  styledIconResetStyle,
  styledIconBaseStyle,
  () => css`
    color: ${({ theme }) => theme.brand.color.feedback.success.pure};
  `
)

const StyledWarningIcon = styled(Warning)(
  styledIconResetStyle,
  styledIconBaseStyle,
  () => css`
    color: ${({ theme }) => theme.brand.color.feedback.warning.pure};
  `
)

const StyledFailureIcon = styled(ErrorCircle)(
  styledIconResetStyle,
  styledIconBaseStyle,
  () => css`
    color: ${({ theme }) => theme.brand.color.feedback.failure.pure};
  `
)

const Toast: React.FunctionComponent<ToastProps> = (props) => {
  return (
    <StyledToast {...props}>
      <StyledToastHeader>
        {props.success && <StyledSuccessIcon />}
        {props.warning && <StyledWarningIcon />}
        {props.failure && <StyledFailureIcon />}
        <StyledToastHeaderTitle>
          {props.title}
        </StyledToastHeaderTitle>
      </StyledToastHeader>
      <StyledToastBody>
        {props.message}
      </StyledToastBody>
    </StyledToast>
  );
}

export default Toast;
