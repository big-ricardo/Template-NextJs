import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Sigmar One', cursive;
    font-family: 'Ubuntu', sans-serif;
  }

  background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: 'Roboto', 'Philosopher', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: none;
    line-height: inherit;
    font-feature-settings: none;
    height: auto !important;
`
