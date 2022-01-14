import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Heading, Input } from '../..';

export interface FormLoginProps extends React.FormHTMLAttributes<HTMLFormElement> {
  forgetPasswordPath: string;
}

const formLoginResetStyle = () => css`
  border: none;
  margin: 0;
`

const formLoginBaseStyle = () => css`
  display: flex;
  flex-direction column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.inset.md};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  width: 380px;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  box-sizing: border-box;
`

const StyledFormLogin = styled.form(
  formLoginResetStyle,
  formLoginBaseStyle
);

const inputGroupBaseStyle = () => css`
  margin-top: ${({ theme }) => theme.spacing.size.lg};

  input:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledInputGroup = styled.div(inputGroupBaseStyle);

const actionGroupBaseStyle = () => css`
  margin-top: ${({ theme }) => theme.spacing.size.md};

  button:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledActionGroup = styled.div(actionGroupBaseStyle);

const FormLogin: React.FunctionComponent<FormLoginProps> = (props) => {
  return (
    <StyledFormLogin {...props}>
      <Heading> Faça seu Log in </Heading>
      <StyledInputGroup>
        <Input fluid placeholder="Digite seu CPF" />
        <Input fluid placeholder="Digite sua senha" />
      </StyledInputGroup>
      <StyledActionGroup>
        <Button type="submit" fluid>Acessar</Button>
        <Button type="submit" fluid tertiary as={"a"} href={props.forgetPasswordPath}>Esqueci minha senha</Button>
      </StyledActionGroup>
    </StyledFormLogin>
  );
}

export default FormLogin;
