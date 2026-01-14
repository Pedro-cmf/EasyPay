import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Transferencia from './pages/transferencia/transferencia';
import Transacoes from './pages/home/transacoes/transacao';
import OpenAccountModal from './components/modal/criarConta/criarConta';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/criarConta" element={<OpenAccountModal />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/transferencia"
            element={
              <PrivateRoute>
                <Transferencia />
              </PrivateRoute>
            }
          />
          <Route
            path="/transacoes"
            element={
              <PrivateRoute>
                <Transacoes />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
