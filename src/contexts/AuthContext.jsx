import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      fetchUserData(parsedUser.id);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);
      localStorage.setItem('usuario', JSON.stringify(response.data));
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = useCallback(async (cpfCnpj, password) => {
    try {
      const response = await api.get('/users');
      const foundUser = response.data.find(
        (u) => u.cpfCnpj === cpfCnpj && u.password === password
      );

      if (!foundUser) {
        throw new Error('CPF/CNPJ ou senha inválidos!');
      }

      setUser(foundUser);
      localStorage.setItem('usuario', JSON.stringify(foundUser));
      return foundUser;
    } catch (error) {
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('usuario');
    navigate('/');
  }, [navigate]);

  const refreshUser = useCallback(async () => {
    if (user?.id) {
      await fetchUserData(user.id);
    }
  }, [user?.id]);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
