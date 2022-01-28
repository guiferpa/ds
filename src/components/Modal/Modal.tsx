import { Close } from '@styled-icons/evaicons-solid';
import React from 'react';
import styled, { css } from 'styled-components';

export interface ModalProps {
  title: string;
  cover?: string;
  message: string;
  actions?: React.ReactNode;

  onClose?: () => void;
}

const modalContainerResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const modalContainerBaseStyle = () => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
`

const StyledModalContainer = styled.div(
  modalContainerResetStyle,
  modalContainerBaseStyle
);

const modalBoxResetStyle = () => css``

const modalBoxBaseStyle = () => css`
  width: 80%;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing.inset.md};
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.brand.color.light.light};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`

const StyledModalBox = styled.div(
  modalBoxResetStyle,
  modalBoxBaseStyle
);

const modalBoxHeaderBaseStyle = () => css`
  text-align: center;
`

const StyledModalBoxHeader = styled.div(
  modalBoxHeaderBaseStyle
);

const modalBoxHeaderTitleResetStyle = () => css`
  padding: 0;
  margin: 0;
`

const modalBoxHeaderTitleBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.brand.typography.weight.bold};
`

const StyledModalBoxHeaderTitle = styled.h1(
  modalBoxHeaderTitleResetStyle,
  modalBoxHeaderTitleBaseStyle
);

const StyledModalBoxBody = styled.div({});

const modalBoxBodyMessageBaseStyle = () => css`
  text-align: center;
  font-weight: ${({ theme }) => theme.brand.typography.weight.light};
`

const StyledModalBoxBodyMessage = styled.p(
  modalBoxBodyMessageBaseStyle
);

const closeIconBaseStyle = () => css`
  width: 23px;
  width: 23px;
`

const StyledCloseIcon = styled(Close)(
  closeIconBaseStyle
);

const closeButtonResetStyle = () => css`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`

const closeButtonBaseStyle = () => css`
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

const StyledCloseButton = styled.button(
  closeButtonResetStyle,
  closeButtonBaseStyle
);

const StyledButtonActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.size.lg};
`

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  return (
    <StyledModalContainer>
      <StyledModalBox>
        <StyledModalBoxHeader>
          <StyledModalBoxHeaderTitle>
            { props.title }
          </StyledModalBoxHeaderTitle>
        </StyledModalBoxHeader>
        <StyledModalBoxBody>
          <StyledModalBoxBodyMessage>
            {props.message}
          </StyledModalBoxBodyMessage>
          {props.actions && <StyledButtonActionContainer>{props.actions}</StyledButtonActionContainer>}
        </StyledModalBoxBody>
        <StyledCloseButton onClick={() => props.onClose && props.onClose()}>
          <StyledCloseIcon />
        </StyledCloseButton>
      </StyledModalBox>
    </StyledModalContainer>
  );
}

export default Modal;
