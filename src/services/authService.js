import api from './api';

export const login = async (data) => {
  try {
    const response = await api.get('/users');
    const user = response.data.find(
      (user) => user.cpfCnpj === data.cpfCnpj && user.password === data.password
    );

    if (user) {
      return user;
    } else {
      throw new Error('CPF/CNPJ ou senha inválidos!');
    }
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar usuário');
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
};

export const checkUserExists = async (cpfCnpj) => {
  try {
    const response = await api.get('/users');
    return response.data.some((user) => user.cpfCnpj === cpfCnpj);
  } catch (error) {
    throw new Error('Erro ao verificar usuário');
  }
};
