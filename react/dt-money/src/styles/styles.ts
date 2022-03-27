// Importação do styled components 
import { createGlobalStyle } from "styled-components";

// Função global de estilos
export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E62E4D;
        --blue: #5429CC;
        --light-blue: #6933ff;
        --green: #33CC95;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --black: #000000;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;