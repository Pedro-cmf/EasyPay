import React, { useEffect, useState } from 'react';
import api from '../../../../api/api ';
import Navbar from '../../../components/navbar/navBar';
import Footer from '../../../components/footer/footer';
import { Container, Section, TabelaTransacoes, DetalhesConta, InfoConta, StatusBadge } from './styled';

function Transacoes() {
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
      <Navbar user={user} handleLogout={() => { localStorage.clear(); window.location.href = '/'; }} />
      <Section>
        <TabelaTransacoes>
          <h3>Todas as Transações</h3>
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

          <InfoConta>
            <h4>Conta</h4>
            <p>Número: {user?.accountNumber}</p>
            <p>Saldo: R$ {user?.balance}</p>
            <p>Chave: {user?.key}</p>
          </InfoConta>
        </div>
      </Section>
      <Footer />
    </Container>
  );
}

export default Transacoes;
