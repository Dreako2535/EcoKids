import React, { useState } from 'react';

import styled from 'styled-components';
import logo from '../../assets/images/logos/EcoKidslogo.png'; // Asegúrate de que esta ruta sea correcta
import backgroundImage from "../../assets/images/bg/login.jpg";
import { useNavigate, Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.5);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 320px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #71b7e6;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #9b59b6;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const CreateAccountMessage = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const Login = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializar useNavigate



  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías validar tus credenciales
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/'); // Redirige al FullLayout después de iniciar sesión
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Logo src={logo} alt="EcoKids Logo" />
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={()=>{navigate("/")}} type="submit">Iniciar sesión</Button>
        <CreateAccountMessage>
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </CreateAccountMessage>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
