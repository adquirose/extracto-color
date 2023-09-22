import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        font-family:16px;
    }
    a {
        font-weight: regular;
        color: gray;
        text-decoration: inherit;
    }
    a:hover {
        color: lightgray;
    }
}`;
 
export default GlobalStyle;