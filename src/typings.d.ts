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
          light: string;
          medium: string;
          dark: string;
        },
        feedback: {
          warning: {
            pure: string;
            dark: string;
          },
          failure: {
            pure: string;
            dark: string;
          },
          success: {
            pure: string;
            dark: string;
          }
        }
      },
      typography: {
        family: {
          body: string;
        }
        weight: {
          light: number;
          medium: number;
          bold: number;
        }
      }
    },
    border: {
      radius: {
        xs: string;
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
        xs: string;
        sm: string;
        md: string;
        lg: string;
      }
    },
    shadow: {
      intensity: {
        one: string;
      }
    },
    opacity: {
      intensity: {
        four: number;
      }
    }
  }
}

declare module 'ttf';
