import React from 'react';
import styled, { css } from 'styled-components';

import Avatar from '../../../components/Avatar';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

export interface AccountCardProps {}

const accountCardResetStyle = () => css`
  border: none;
  margin: 0;
`

const accountCardBaseStyle = (props: AccountCardProps) => css`
  display: flex;
  flex-direction column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.inset.md};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
  box-sizing: border-box;
  width: 768px;

  @media(max-width: 768px) {
    position: relative;
    transform: translate(0, 0);
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 90%;
  }
`

const StyledAccountCard = styled.div(
  accountCardResetStyle,
  accountCardBaseStyle
);

const StyledAccountCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.size.lg};
`;

const StyledAccountCardContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const options = [
  { label: "Sim", value: "true", selected: true },
  { label: "Não", value: "false", selected: false }
]

const AccountCard: React.FunctionComponent<AccountCardProps> = (props) => {
  return (
    <StyledAccountCard {...props}>
      <StyledAccountCardHeader>
        <Avatar src={""} xlarge isEditable />
      </StyledAccountCardHeader>
      <StyledAccountCardContent>
        <Input fluid label="Nome completo"/>
        <Input fluid label="Apelido" />
        <Input fluid label="CEP" />
        <Input fluid label="Telefone celular" />
        <Input fluid label="Gênero"/>
        <Input fluid label="Nível de escolaridade" />
        <Select fluid label="Reside em comunidade?" options={options} />
        <Select fluid label="É refugiado?" options={options} />
      </StyledAccountCardContent>
    </StyledAccountCard>
  );
}

/*
 - Apelido
 - Nome completo
 - CEP
 - Telefone
 - Gênero
 - Nível de escolaridade
 - Reside em comunidade?
 - É refugiado?
*/

export default AccountCard;
