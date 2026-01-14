import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { useAuth } from './useAuth';

export function useTransactions() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = useCallback(async () => {
    if (!user?.accountNumber) return;

    try {
      setLoading(true);
      setError(null);
      const response = await api.get('/transactions');
      const userTransactions = response.data.filter(
        (t) => t.account === user.accountNumber
      );
      setTransactions(userTransactions);
    } catch (err) {
      setError('Erro ao carregar transações');
    } finally {
      setLoading(false);
    }
  }, [user?.accountNumber]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const createTransaction = useCallback(async (transactionData) => {
    try {
      const newTransaction = {
        ...transactionData,
        account: user.accountNumber,
        date: new Date().toLocaleDateString('pt-BR'),
        status: 'Concluído',
        type: 'PIX',
      };

      const response = await api.post('/transactions', newTransaction);
      setTransactions((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      throw new Error('Erro ao criar transação');
    }
  }, [user?.accountNumber]);

  const findUserByPixKey = useCallback(async (pixKey) => {
    try {
      const response = await api.get('/users');
      const foundUser = response.data.find((u) => u.key === pixKey);

      if (!foundUser) {
        throw new Error('Chave PIX não encontrada');
      }

      if (foundUser.id === user?.id) {
        throw new Error('Não é possível transferir para você mesmo');
      }

      return foundUser;
    } catch (err) {
      throw err;
    }
  }, [user?.id]);

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
    createTransaction,
    findUserByPixKey,
  };
}
