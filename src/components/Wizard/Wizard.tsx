import React from 'react';
import styled, { css } from 'styled-components';

export interface WizardProps {
  current: number;
  amount: number;
}

const StyledWizard = styled.div({});

const wizardProgressContainerResetStyle = () => css``

const wizardProgressContainerBaseStyle = () => css`
  display: flex;
  gap: 10px;
  width: 100%;
`

const StyledWizardProgressContainer = styled.div(
  wizardProgressContainerResetStyle,
  wizardProgressContainerBaseStyle
);

export interface WizardProgressItemProps {
  active: boolean;
}

const wizardProgressItemResetStyle = () => css``

const wizardProgressItemBaseStyle = () => css`
  width: 100%;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.brand.color.light.medium};
`

const wizardProgressItemActiveStyle = (props: WizardProgressItemProps) => props.active && css`
  background-color: ${({ theme }) => theme.brand.color.primary.pure};
`

const StyledWizardProgressItem = styled.div(
  wizardProgressItemResetStyle,
  wizardProgressItemBaseStyle,
  wizardProgressItemActiveStyle
);

const Wizard: React.FunctionComponent<WizardProps> = (props) => {
  const steps: number[] = Array.from(Array(props.amount).keys());

  return (
    <StyledWizard>
      <StyledWizardProgressContainer>
        {steps.map((item, idx) => {
          return (
            <StyledWizardProgressItem active={(idx <= (props.current - 1))} key={idx}/>
          );
        })}
      </StyledWizardProgressContainer>
    </StyledWizard>
  );
}

export default Wizard;
