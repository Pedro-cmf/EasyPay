import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import { Container, Section, TabelaTransacoes, DetalhesConta } from './homeStyles';

function Home() {
  const { user, logout } = useAuth();
  const { transactions, loading, error } = useTransactions();

  const recentTransactions = transactions.slice(-5).reverse();

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
                {recentTransactions.map((t) => (
                  <tr key={t.id}>
                    <td>{t.type}</td>
                    <td>R$ {t.value || t.valor}</td>
                    <td>{t.status}</td>
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
          <p>Saldo: R$ {user?.balance?.toFixed(2)}</p>
          <p>Chave: {user?.key}</p>
        </DetalhesConta>
      </Section>
      <Footer />
    </Container>
  );
}

export default Home;
