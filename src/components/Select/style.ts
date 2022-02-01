import { StylesConfig } from 'react-select';

import * as tokens from '../../tokens';

const styles: StylesConfig = {
  input: (provided) => {
    return {
      ...provided,
      padding: 0,
      margin: 0,
      fontSize: tokens.typography.size.md
    }
  },
  placeholder: (provided) => {
    return {
      ...provided,
      margin: 0
    };
  },
  valueContainer: (provided) => {
    return {
      ...provided,
      padding: 0
    }
  },
  indicatorsContainer: (provided) => {
    return {
      ...provided,
      height: "20px",
    }
  },
  option: (provided) => {
    return {
      ...provided,
      "&:hover": {
        backgroundColor: tokens.brand.color.light.light,
        "cursor": "pointer"
      }
    }
  },
  noOptionsMessage: (provided) => {
    return {
      ...provided
    }
  },
  control: (provided, state) => {
    return {
      ...provided,
      width: "100%",
      borderRadius: tokens.border.radius.sm,
      padding: tokens.spacing.inset.sm,
      borderWidth: tokens.border.size.sm,
      position: "relative",
      boxShadow: "none",
      borderColor: (state.isFocused ? tokens.brand.color.primary.pure : tokens.brand.color.light.dark ),
      "&:hover": {
        cursor: "pointer",
        backgroundColor: tokens.brand.color.light.light,
      }
    }
  }
};

export default styles;
