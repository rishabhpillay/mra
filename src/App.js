import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedRoute from './routes/UnprotectedRoute';

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute />
      <UnprotectedRoute />
    </BrowserRouter>
  );
}

export default App;
