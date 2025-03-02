import "styled-components/native";  // Native? He used without Native
import theme from "./theme";

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}