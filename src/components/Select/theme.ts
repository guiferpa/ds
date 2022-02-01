import * as tokens from '../../tokens';

export default function(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: tokens.brand.color.primary.pure,
      primary25: tokens.brand.color.primary.light,
      neutral20: tokens.brand.color.light.light,
      danger: tokens.brand.color.feedback.failure.pure,
      dangerLight: tokens.brand.color.feedback.failure.light
    }
  }
}