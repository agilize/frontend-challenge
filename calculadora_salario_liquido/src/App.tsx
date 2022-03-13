import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
