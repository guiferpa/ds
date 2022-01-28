import React from 'react';
import styled, { css } from 'styled-components';
import { CheckCircle, ErrorCircle, Error as Warning } from '@styled-icons/boxicons-solid';
import { Close } from '@styled-icons/evaicons-solid';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  warning?: boolean;
  failure?: boolean;
  success?: boolean;

  onClose?: () => void;
}

const toastResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const toastBaseStyle = () => css`
  position: relative;
  padding: ${({ theme }) => theme.spacing.inset.md};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 100%;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  border: solid ${({ theme }) => theme.border.size.sm} ${({ theme }) => theme.brand.color.heavy.pure};
  box-sizing: border-box;
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

const StyledCloseIcon = styled(Close)`
  width: 23px;
  width: 23px;
  `
  
const StyledCloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;

  position: absolute;
  top: ${({ theme }) => theme.spacing.size.xs};
  right: ${({ theme }) => theme.spacing.size.xs};
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.border.radius.xs};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

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
      <StyledCloseButton onClick={() => props.onClose && props.onClose()}>
        <StyledCloseIcon />
      </StyledCloseButton>
    </StyledToast>
  );
}

export default Toast;
