import ThemeProvider from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: [
      {
        name: '1440x768',
        styles: {
          width: '1440px',
          height: '768px'
        }
      },
      {
        name: '1024x768',
        styles: {
          width: '1024px',
          height: '768px'
        }
      },
      {
        name: '768x768',
        styles: {
          width: '768px',
          height: '768px'
        }
      },
      {
        name: '425x768',
        styles: {
          width: '425px',
          height: '768px'
        }
      },
      {
        name: '375x768',
        styles: {
          width: '375px',
          height: '768px'
        }
      },
      {
        name: '320x768',
        styles: {
          width: '320px',
          height: '768px'
        }
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];