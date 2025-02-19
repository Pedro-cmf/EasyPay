import React, { useState, useEffect } from 'react';
import api from '../../../api/api ';
import Navbar from '../../components/navbar/navBar';
import TransacaoModal from '../../components/modal/home/transacao/transacaoModal';
import ValorModal from '../../components/modal/home/valores/valorModal';
import RevisaoModal from '../../components/modal/home/revisao/revisaoModal';
import ConfirmacaoModal from '../../components/modal/home/confirmacao/confirmacaoModal';
import ErroModal from '../../components/modal/home/erro/erroModal';
import TransferenciaModal from '../../components/modal/transferencia/transferenciaModal';

import {
  Container,
  Section,
  TabelaTransacoes,
  DetalhesConta,
  InfoConta,
  ModalOverlay,
  ModalContent,
} from './homeStyles';

function Home() {
  const [transacoes, setTransacoes] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const [modal, setModal] = useState(null);

  const atualizarTransacoes = async () => {
    const response = await api.get('/transactions');
    setTransacoes(response.data);
  };

  useEffect(() => {
    const carregarDados = async () => {
      const responseUsuario = await api.get('/users/1');
      const responseTransacoes = await api.get('/transactions');
      setUsuario(responseUsuario.data);
      setTransacoes(responseTransacoes.data);
    };
    carregarDados();
  }, []);

  useEffect(() => {
    if (activeSection === 'transferencia') setModal('transferencia');
    if (activeSection === 'transacoes') setModal('detalhesTransacoes');
  }, [activeSection]);

  const handleLogout = () => window.location.href = '/';

  return (
    <Container>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleLogout={handleLogout}
      />

      <Section>
        {activeSection === 'inicio' && (
          <>
            <TabelaTransacoes>
              <h3>Últimas Transações</h3>
              {transacoes.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Valor</th>
                      <th>Status</th>
                      <th>Nome</th>
                      <th>Conta</th>
                      <th>Chave</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transacoes.map((transacao) => (
                      <tr key={transacao.id}>
                        <td>{transacao.type}</td>
                        <td>R$ {transacao.value}</td>
                        <td>{transacao.status}</td>
                        <td>{transacao.name}</td>
                        <td>{transacao.account}</td>
                        <td>{transacao.key}</td>
                        <td>{transacao.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Sem transações disponíveis.</p>
              )}
            </TabelaTransacoes>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
              <DetalhesConta>
                <h4>Detalhes da Conta</h4>
                {usuario && (
                  <>
                    <p>Nome: {usuario.name}</p>
                    <p>E-mail: {usuario.email}</p>
                    <p>Tipo: {usuario.isBusiness ? 'Empresa' : 'Pessoal'}</p>
                  </>
                )}
              </DetalhesConta>

              <InfoConta>
                <h4>Conta</h4>
                {usuario && (
                  <>
                    <p>Número: {usuario.accountNumber}</p>
                    <p>Saldo: <span>R$ {usuario.balance}</span></p>
                    <p>Chave: {usuario.key}</p>
                  </>
                )}
              </InfoConta>
            </div>
          </>
        )}
      </Section>

      {/* ✅ Modal de Transferência */}
      {modal === 'transferencia' && (
        <ModalOverlay>
          <TransferenciaModal
            usuario={usuario}
            onClose={() => setActiveSection('inicio')}
            atualizarTransacoes={atualizarTransacoes}
          />
        </ModalOverlay>
      )}

      {/* ✅ Modal de Todas as Transações */}
      {modal === 'detalhesTransacoes' && (
        <ModalOverlay>
          <ModalContent>
            <TabelaTransacoes>
              <h3>Todas as Transações</h3>
              {transacoes.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Valor</th>
                      <th>Status</th>
                      <th>Nome</th>
                      <th>Conta</th>
                      <th>Chave</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transacoes.map((transacao) => (
                      <tr key={transacao.id}>
                        <td>{transacao.type}</td>
                        <td>R$ {transacao.value}</td>
                        <td>{transacao.status}</td>
                        <td>{transacao.name}</td>
                        <td>{transacao.account}</td>
                        <td>{transacao.key}</td>
                        <td>{transacao.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Sem transações disponíveis.</p>
              )}
            </TabelaTransacoes>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* ✅ Outros Modais Existentes */}
      {modal === 'transacao' && (
        <ModalOverlay>
          <TransacaoModal onClose={() => setModal(null)} setModal={setModal} />
        </ModalOverlay>
      )}
      {modal === 'valor' && (
        <ModalOverlay>
          <ValorModal onClose={() => setModal(null)} setModal={setModal} />
        </ModalOverlay>
      )}
      {modal === 'revisao' && (
        <ModalOverlay>
          <RevisaoModal
            onClose={() => setModal(null)}
            setModal={setModal}
            onConfirm={() => setModal('confirmacao')}
          />
        </ModalOverlay>
      )}
      {modal === 'confirmacao' && (
        <ModalOverlay>
          <ConfirmacaoModal
            onClose={() => setModal(null)}
            onConfirm={() => setModal('transacao')}
          />
        </ModalOverlay>
      )}
      {modal === 'erro' && (
        <ModalOverlay>
          <ErroModal onClose={() => setModal(null)} setModal={setModal} />
        </ModalOverlay>
      )}
    </Container>
  );
}

export default Home;
