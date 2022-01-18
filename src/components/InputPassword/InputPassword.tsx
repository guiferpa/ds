import React from 'react';
import styled, { css } from 'styled-components';
import { Eye, EyeClose } from '@styled-icons/remix-fill';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fluid?: boolean;
}

const inputResetStyle = (props: InputProps) => css`
  border: none;
  margin: 0;
`

const inputBaseStyle = (props: InputProps) => css`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  border-width: ${({ theme }) => theme.border.size.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.brand.color.light.dark};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  box-sizing: border-box;
  width: 200px;

  &:focus-within {
    outline: none;
    border-color: ${({ theme }) => theme.brand.color.primary.pure};
  }
`

const inputFluidStyle = (props: InputProps) => props.fluid && css`
  width: 100%;
`

const StyledInputPasswordContainer = styled.div(
  inputResetStyle,
  inputBaseStyle,
  inputFluidStyle
);

const inputPasswordResetStyle = () => css`
  border: none;
  outline: none;
`

const inputPasswordBaseStyle = () => css`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  padding-right: 0;
  font-size: ${({ theme }) => theme.typography.size.md};
`

const StyledInputPassword = styled.input(
  inputPasswordResetStyle,
  inputPasswordBaseStyle
);

const buttonToggleVisibleResetStyle = () => css``

const buttonToggleVisibleBaseStyle = () => css`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.inset.xs};
  padding: ${({ theme }) => theme.spacing.inset.xs};
  border-radius: ${({ theme }) => theme.border.radius.xs};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledButtonToggleVisible = styled.div(
  buttonToggleVisibleResetStyle,
  buttonToggleVisibleBaseStyle
);

const buttonToggleVisibleIconStyle = () => css`
  color: ${({ theme }) => theme.brand.color.primary.dark};
  width: ${({ theme }) => theme.typography.size.md};
`

const StyledEyeOpened = styled(Eye)(buttonToggleVisibleIconStyle);
const StyledEyeClosed = styled(EyeClose)(buttonToggleVisibleIconStyle);

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <StyledInputPasswordContainer fluid={props.fluid}>
      <StyledInputPassword placeholder={props.placeholder} type={isOpen ? "text" : "password"} />
      <StyledButtonToggleVisible onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <StyledEyeClosed />
        ) : (
          <StyledEyeOpened />
        )}
      </StyledButtonToggleVisible>
    </StyledInputPasswordContainer>
  );
}

export default Input;
