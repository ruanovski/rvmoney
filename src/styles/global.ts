import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root{
		--blue-light: #17c5e5;
		--blue-dark: #0D98B2;

		--red: #e52e4d;
		--green: #34C759;

		--black: #121214;
		--background: #202024;
		--gray-700: #323238;
		--gray-800: #29292E;

		--text-primary: #FFFFFF;

	}


	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}     

	html {
		@media(max-width: 1080px){
			font-size: 93.75%;
		}

		@media(max-width: 720px){
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
		-webkit-font-smoothing: antialiased;
		color: var(--text-primary);
	}

	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong{
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled]{
		opacity: 0.6;
	}
  
`