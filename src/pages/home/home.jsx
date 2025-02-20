import React, { useEffect, useState } from 'react';
import api from '../../../api/api ';
import Navbar from '../../components/navbar/navBar';
import { Container, DetalhesConta, Section, TabelaTransacoes, StatusBadge } from './homeStyles';
import Footer from '../../components/footer/footer';

function Home() {
  const [user, setUser] = useState(null);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
      const userData = await api.get(`/users/${usuarioLogado.id}`);
      setUser(userData.data);

      const userTransacoes = await api.get('/transactions');
      setTransacoes(userTransacoes.data.filter(t => t.account === userData.data.accountNumber));
    };
    fetchUserData();
  }, []);

  return (
    <Container>
      <Navbar usuario={user} handleLogout={() => { localStorage.clear(); window.location.href = '/'; }} />
      <Section>
        <TabelaTransacoes>
          <h3>Últimas Transações</h3>
          {transacoes.length === 0 ? (
            <p>Sem transações disponíveis.</p>
          ) : (
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
                {transacoes.map((transacao) => (
                  <tr key={transacao.id}>
                    <td>{transacao.type}</td>
                    <td>R$ {transacao.value}</td>
                    <td>
                      <StatusBadge status={transacao.status}>
                        {transacao.status}
                      </StatusBadge>
                    </td>
                    <td>{transacao.name}</td>
                    <td>{transacao.account}</td>
                    <td>{transacao.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </TabelaTransacoes>

        <div>
          <DetalhesConta>
            <h4>Detalhes</h4>
            <p>Nome: {user?.name}</p>
            <p>E-mail: {user?.email}</p>
            <p>Tipo: Pessoal</p>
          </DetalhesConta>

          <DetalhesConta>
            <h4>Conta</h4>
            <p>Número: {user?.accountNumber}</p>
            <p>Saldo: <strong>R$ {user?.balance}</strong></p>
            <p>Chave: {user?.key}</p>
          </DetalhesConta>
        </div>
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
