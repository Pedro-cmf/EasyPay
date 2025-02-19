import api from "../../api/api ";

export const login = async (data) => {
    console.log("Recebendo dados no authService:", data);

  try {
    const response = await api.get('/users');
    const user = response.data.find(user => 
      user.cpfCnpj === data.cpfCnpj && user.password === data.password
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
