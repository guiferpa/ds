import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Heading, Input, Link } from '../..';
import InputPassword from '../../InputPassword';

export interface FormLoginProps extends React.FormHTMLAttributes<HTMLFormElement> {
  forgotPasswordPath: string;
  signUpPath: string;
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
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  box-sizing: border-box;
  width: 400px;

  @media(max-width: 400px) {
    position: relative;
    transform: translate(0, 0);
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 90%;
  }
`

const StyledFormLogin = styled.form(
  formLoginResetStyle,
  formLoginBaseStyle
);

const inputGroupBaseStyle = () => css`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.size.lg};

  & > input:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledInputGroup = styled.div(inputGroupBaseStyle);

const actionGroupBaseStyle = () => css`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.size.md};

  button:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.size.sm};
  }
`

const StyledActionGroup = styled.div(actionGroupBaseStyle);

const signUpResetStyle = () => css``

const signUpBaseStyle = () => css`
  display: flex;
  gap: 10px;
  margin-top: ${({ theme }) => theme.spacing.size.lg};
  margin-bottom: ${({ theme }) => theme.spacing.size.md};
`

const StyledSignUp = styled.div(
  signUpResetStyle,
  signUpBaseStyle
);

const signUpLabelResetStyle = () => css``

const signUpLabelBaseStyle = () => css`
  color: ${({ theme }) => theme.brand.color.heavy.light};
`

const StyledSignUpLabel = styled.span(
  signUpLabelResetStyle,
  signUpLabelBaseStyle
);

const FormLogin: React.FunctionComponent<FormLoginProps> = (props) => {
  return (
    <StyledFormLogin {...props}>
      <Heading> Faça seu Log in </Heading>
      <StyledInputGroup>
        <Input fluid placeholder="Digite seu CPF" />
        <InputPassword fluid placeholder="Digite sua senha" />
      </StyledInputGroup>
      <StyledActionGroup>
        <Button type="submit" fluid label="Acessar" />
        <Button type="submit" fluid tertiary as={"a"} href={props.forgotPasswordPath}>Esqueci minha senha</Button>
      </StyledActionGroup>
      <StyledSignUp>
        <StyledSignUpLabel>Não tem uma conta?</StyledSignUpLabel>
        <Link href={props.signUpPath}>Cadastre-se</Link>
      </StyledSignUp>
    </StyledFormLogin>
  );
}

export default FormLogin;
