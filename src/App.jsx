import { Route, Routes, Navigate } from 'react-router-dom';
import CriarConta from "./components/modal/criarConta/criarConta.jsx";
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import Transferencia from './pages/transferencia/transferencia.jsx';
import Transacoes from './pages/home/transacoes/transacao.jsx';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('usuario');
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criarConta" element={<CriarConta />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/transferencia" element={<PrivateRoute><Transferencia /></PrivateRoute>} />
        <Route path="/transacoes" element={<PrivateRoute><Transacoes /></PrivateRoute>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
