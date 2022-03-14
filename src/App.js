import Calculator from "./components/Calculator";
import Input from "./components/Inputs";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Calculator />
    </AppProvider>
  );
}

export default App;
