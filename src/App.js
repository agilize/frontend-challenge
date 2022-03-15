import AppProvider from "./context/AppProvider";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <AppProvider>
      <Calculator />
    </AppProvider>
  );
}

export default App;
