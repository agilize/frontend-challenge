import AppProvider from "./context/AppProvider";
import Calculator from "./pages/Calculator";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Calculator />
    </AppProvider>
  );
}

export default App;
