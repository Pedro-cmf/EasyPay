import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import {
  Container,
  Section,
  TabelaTransacoes,
  DetalhesConta,
  AccountValue,
  StatusBadge,
} from './homeStyles';

function Home() {
  const { user, logout } = useAuth();
  const { transactions, loading, error } = useTransactions();

  const recentTransactions = transactions.slice(-5).reverse();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value || 0);
  };

  return (
    <Container>
      <Navbar user={user} handleLogout={logout} />
      <Section>
        <TabelaTransacoes>
          <h3>Últimas Transações</h3>
          {loading ? (
            <p>Carregando transações...</p>
          ) : error ? (
            <p>{error}</p>
          ) : recentTransactions.length === 0 ? (
            <p>Nenhuma transação encontrada</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Destinatário</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((t) => (
                  <tr key={t.id}>
                    <td>{t.type}</td>
                    <td>{formatCurrency(t.value || t.valor)}</td>
                    <td>
                      <StatusBadge $status={t.status}>{t.status}</StatusBadge>
                    </td>
                    <td>{t.name}</td>
                    <td>{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </TabelaTransacoes>

        <DetalhesConta>
          <h4>Minha Conta</h4>
          <p>
            Nome
            <AccountValue>{user?.name}</AccountValue>
          </p>
          <p>
            Saldo disponível
            <AccountValue $highlight $large>
              {formatCurrency(user?.balance)}
            </AccountValue>
          </p>
          <p>
            Chave PIX
            <AccountValue>{user?.key}</AccountValue>
          </p>
          <p>
            Conta
            <AccountValue>{user?.accountNumber}</AccountValue>
          </p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
