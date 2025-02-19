import { Route, Routes } from 'react-router-dom';
import CriarConta from "./components/modal/criarConta/criarConta.jsx";
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/criarConta" element={<CriarConta />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
