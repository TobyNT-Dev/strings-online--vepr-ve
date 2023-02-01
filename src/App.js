import styled, { ThemeProvider } from "styled-components";
import { AppRouter } from "./Routers/AppRouter";
import { Theme } from "./Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StyledApp>
        <AppRouter/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
const StyledApp = styled.div`
background-color: ${props => props.theme.colors.background};

width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 0.5fr 2fr 2fr 2fr 1fr 4fr 0.5fr;
grid-template-rows: 1fr 1fr 5fr 4fr min-content;
grid-template-areas: 
". NBAR NBAR NBAR NBAR SBAR ."
". BRED BRED BRED BRED BRED ."
". LIST MAIN MAIN MAIN MAIN ."
".  .   MAIN MAIN MAIN MAIN ."
"FOOT FOOT FOOT FOOT FOOT FOOT FOOT";
grid-gap: 0.2rem;
`