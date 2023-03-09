import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // explain your shape(or properties) of theme
    bgColor: string;
    textColor: string;
    highlight: string;
    headerFont: string;
  }
}
