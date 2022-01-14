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
        family: {
          body: string;
        }
        weight: {
          medium: number;
          bold: number;
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
        md: string;
        lg: string;
      },
      inset: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
      }
    },
    typography: {
      size: {
        md: string;
        lg: string;
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
