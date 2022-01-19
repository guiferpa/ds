import React from 'react';
import styled, { css } from 'styled-components';
import { ChevronSmallUp, ChevronSmallDown } from '@styled-icons/entypo';

export interface Option {
  label: string;
  value: string;
  selected: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  fluid?: boolean;
  label?: string;
  options: Option[];
}

interface SelectWrapperProps {
  fluid?: boolean;
}

const selectWrapperBaseStyle = () => css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
`

const selectWrapperFluidStyle = (props: SelectWrapperProps) => props.fluid && css`
  width: 100%;
`

const StyledSelectWrapper = styled.div(
  selectWrapperBaseStyle,
  selectWrapperFluidStyle
);

const selectResetStyle = () => css`
  border: none;
  margin: 0;
`

const selectBaseStyle = () => css`
  position: relative;
  background-color: ${({ theme }) => theme.brand.color.light.pure};
  border-width: ${({ theme }) => theme.border.size.sm};
  border-style: solid;
  border-color: ${({ theme }) => theme.brand.color.light.dark};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing.inset.sm};
  font-size: ${({ theme }) => theme.typography.size.md};
  min-width: 200px;
  box-sizing: border-box;
  appearence: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.color.primary.pure};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brand.color.light.light};
  }
`

const StyledSelect = styled.select(
  selectResetStyle,
  selectBaseStyle
);

const StyledSelectLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.size.xs};
`

const selectIconWrapperBaseStyle = () => css`
  position: relative;
`

const StyledSelectIconWrapper = styled.div(
  selectIconWrapperBaseStyle
);

const StyledSelectIconGroup = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 20px;
  height: 24px;
  display: flex;
  flex-direction: column;
`

const selectIconBaseStyle = () => css``

const StyledSelectIconUp = styled(ChevronSmallUp)(selectIconBaseStyle);

const StyledSelectIconDown = styled(ChevronSmallDown)(selectIconBaseStyle);

const Input: React.FunctionComponent<SelectProps> = (props: SelectProps) => {
  return (
    <StyledSelectWrapper fluid={props.fluid}>
      {props.label && <StyledSelectLabel> {props.label} </StyledSelectLabel>}
      <StyledSelectIconWrapper>
        <StyledSelect {...props}>
          {props.options.map((opt: Option) => {
            const { label, ...rest } = opt;
            return <option {...rest}>{ label }</option>;
          })}
        </StyledSelect>
        <StyledSelectIconGroup>
          <StyledSelectIconUp />
          <StyledSelectIconDown />
        </StyledSelectIconGroup>
      </StyledSelectIconWrapper>
    </StyledSelectWrapper>
  );
}

export default Input;
