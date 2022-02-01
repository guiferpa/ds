import React from 'react';
import styled, { css } from 'styled-components';
import ReactSelect, {
  components,
  IndicatorSeparatorProps, 
  DropdownIndicatorProps, 
  Options
} from 'react-select';

import styles from './style';
import theme from './theme';

import * as Icon from '../Icon';

export interface SelectProps {
  label?: string;
  multi?: boolean;
  fluid?: boolean;
  placeholder?: string;
  noOptionsMessage?: string;
  options: Options<any>;
  onChange?: (value: any) => void;
  value?: string;
  defaultValue?: string;
}

const IndicatorSeparator = (props: IndicatorSeparatorProps) => {
  return (
    <></>
  );
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.IndicatorsContainer {...props}>
      {props.selectProps.menuIsOpen ? (
        <Icon.ChevronUpIcon />
      ) : (
        <Icon.ChevronDownIcon />
      )}
    </components.IndicatorsContainer>
  );
}

const generateNoOptionsMessage = (message?: string) => (props) => {
  return (
    <components.NoOptionsMessage {...props}>
      {message}
    </components.NoOptionsMessage>
  );
}

interface SelectWrapperProps {
  fluid?: boolean;
}

const selectWrapperBaseStyle = () => css`
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

const StyledInputLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.size.xs};
`

const Select: React.FunctionComponent<SelectProps> = (props) => {
  return (
    <StyledSelectWrapper fluid={props.fluid}>
      {props.label && <StyledInputLabel> {props.label} </StyledInputLabel>}
      <ReactSelect
        components={{ 
          IndicatorSeparator, 
          DropdownIndicator,
          NoOptionsMessage: generateNoOptionsMessage(props.noOptionsMessage)
        }}
        options={props.options}
        value={props.value}
        defaultValue={props.defaultValue}
        theme={theme}
        styles={styles}
        isMulti={props.multi}
        placeholder={props.placeholder}
        onChange={(value) => { props.onChange && props.onChange(value) }}
      />
    </StyledSelectWrapper>
  );
}

export default Select;
