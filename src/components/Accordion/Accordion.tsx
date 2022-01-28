import React from 'react';
import styled, { css } from 'styled-components';

import { ChevronUpIcon, ChevronDownIcon } from '../Icon';

export interface AccordionProps {
  title: string;
  isOpened?: boolean;

  onToggle?: () => void;
}

const accordionResetStyle = () => css`
  border: none;
  margin: 0;
`

const accordionBaseStyle = () => css`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: ${({ theme }) => theme.brand.typography.weight.medium};
  width: 100%;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.intensity.one} ${({ theme }) => theme.brand.color.light.medium};
`

const StyledAccordion = styled.div(
  accordionResetStyle,
  accordionBaseStyle
);

const accordionTitleResetStyle = () => css`
  margin: 0;
  padding: 0;
`

const accordionTitleBaseStyle = () => css`
  display: flex;
  alig-items: center;
  gap: ${({ theme }) => theme.spacing.size.sm};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.inset.sm};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  word-break: break-all;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledAccordionTitle = styled.div(
  accordionTitleResetStyle,
  accordionTitleBaseStyle
);

interface AccordionContentProps {
  height: string;
}

const accordionContentBaseStyle = () => css`
  width: 100%;
  box-sizing: border-box;
`

const accordionContentAccordionBehaviorStyle = (props: AccordionContentProps) => css`
  height: ${props.height};
  padding: 0 ${({ theme }) => theme.spacing.inset.sm};
  transition: all ease .5s;
`

const accordionContentShowStyle = (props: AccordionContentProps) => props.height !== "0px" && css`
  padding-top: ${({ theme }) => theme.spacing.inset.sm};
  padding-bottom: ${({ theme }) => theme.spacing.inset.sm};
  margin-top: ${({ theme }) => theme.spacing.size.xs};
`

const StyledAccordionContent = styled.div(
  accordionContentBaseStyle,
  accordionContentAccordionBehaviorStyle,
  accordionContentShowStyle
);

const StyledAccordionIcon = styled.span`
  display: flex;
  align-items: center;
`;

const Heading: React.FunctionComponent<AccordionProps> = (props) => {
  return (
    <StyledAccordion>
      <StyledAccordionTitle onClick={() => props.onToggle && props.onToggle()}>
        <span>{props.title}</span>
        <StyledAccordionIcon>
          {props.isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </StyledAccordionIcon>
      </StyledAccordionTitle>
      <StyledAccordionContent 
        height={props.isOpened ? "auto" : "0px"}
      >
        {props.isOpened && props.children}
      </StyledAccordionContent>
    </StyledAccordion>
  );
}

export default Heading;
