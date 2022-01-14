import 'styled-components';

import * as tokens from './tokens';

declare module 'styled-components' {
  export interface DefaultTheme {
    brand: {
      color: {
        primary: {
          pure: string;
          light: string;
          medium: string;
          dark: string;
        },
        secondary: {
          pure: string;
          light: string;
          medium: string;
          dark: string;
        },
        tertiary: {
          pure: string;
          light: string;
          medium: string;
          dark: string;
        },
        light: {
          pure: string;
          light: string;
          medium: string;
          dark: string;
        },
        heavy: {
          pure: string;
          dark: string;
        }
      },
      typography: {
        weight: {
          medium: number;
        }
      }
    },
    border: {
      radius: {
        sm: string;
        circle: string;
      },
      size: {
        md: string;
        sm: string;
      }
    },
    spacing: {
      size: {
        xs: string;
        sm: string;
      },
      inset: {
        xxs: string;
        xs: string;
        sm: string;
      }
    },
    typography: {
      size: {
        md: string;
      }
    },
    shadow: {
      intensity: {
        one: string;
      }
    }
  }
}

declare module 'ttf';
