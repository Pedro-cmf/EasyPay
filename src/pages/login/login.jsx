import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Container, LeftSide, RightSide } from "./loginStyles";
import Logo from "../../components/logo/logo";
import { login } from "../../services/authService.js";
import OpenAccountModal from "../../components/modal/criarConta/criarConta.jsx";

const schema = z.object({
  cpfCnpj: z.string()
    .min(11, "CPF ou CNPJ inválido")
    .max(14, "CPF ou CNPJ inválido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres")
});

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const cleanData = {
        ...data,
        cpfCnpj: data.cpfCnpj.replace(/\D/g, '') 
      };
      const user = await login(cleanData);
      console.log('Usuário autenticado:', user);
      navigate("/home");
    } catch (error) {
      console.error('Erro no login:', error);
      alert(error.message);
    }
  };

  return (
    <Container>
      <LeftSide>
        <Logo />
        <h1>Acesse sua conta</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="CPF ou CNPJ" type="text" placeholder="Digite seu CPF ou CNPJ" {...register("cpfCnpj")} />
          {errors.cpfCnpj && <p style={{ color: 'red' }}>{errors.cpfCnpj.message}</p>}

          <Input label="Senha" type="password" placeholder="Digite sua senha" {...register("password")} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

          <Button type="submit">Entrar</Button>
        </form>
        <p>Ainda não é membro? <button onClick={() => setModalIsOpen(true)}>Abra sua conta</button></p>
        {modalIsOpen && <OpenAccountModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />}
      </LeftSide>
      <RightSide />
    </Container>
  );
}

export default Login;
