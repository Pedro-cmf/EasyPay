import React, { useEffect, useState } from 'react';
import api from '../../../../api/api ';
import Navbar from '../../../components/navbar/navBar';
import Footer from '../../../components/footer/footer';
import { Container, Section, TabelaTransacoes, DetalhesConta } from './styled';

function Transacoes() {
  const [user, setUser] = useState(null);
  const [transacoes, setTransacoes] = useState([]);

  const fetchUserData = async () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    const userData = await api.get(`/users/${usuarioLogado.id}`);
    setUser(userData.data);
    const userTransacoes = await api.get('/transactions');
    setTransacoes(userTransacoes.data.filter(t => t.account === userData.data.accountNumber));
  };

  useEffect(() => {
    fetchUserData();
    window.addEventListener('storage', fetchUserData);
    return () => window.removeEventListener('storage', fetchUserData);
  }, []);

  return (
    <Container>
      <Navbar user={user} handleLogout={() => { localStorage.clear(); window.location.href = '/'; }} />
      <Section>
        <TabelaTransacoes>
          <h3>Todas as Transações</h3>
          {transacoes.length === 0 ? <p>Sem transações disponíveis.</p> : (
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Nome</th>
                  <th>Conta</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {transacoes.map((t) => (
                  <tr key={t.id}>
                    <td>{t.type}</td>
                    <td>R$ {t.value}</td>
                    <td>
                      
                    </td>
                    <td>{t.name}</td>
                    <td>{t.account}</td>
                    <td>{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </TabelaTransacoes>

        <DetalhesConta>
          <h4>Conta</h4>
          <p>Nome: {user?.name}</p>
          <p>Saldo: R$ {user?.balance}</p>
          <p>Chave: {user?.key}</p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transacoes;
