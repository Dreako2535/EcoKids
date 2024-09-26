// src/components/Register.js
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logos/EcoKidslogo.png'; // Asegúrate de que esta ruta sea correcta
import backgroundImage from '../../assets/images/bg/register.jpg'; // Cambia esta ruta a tu imagen de fondo

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center; 
`;

const RegisterForm = styled.form`
  background: rgba(255, 255, 255, 0.5); 
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 320px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 34px;
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

const Register = () => {
  const [name, setName] = useState(''); // Estado para el nombre
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState(''); // Estado para la edad
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '' || age === '') {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      alert('Registration successful');
      // Aquí puedes agregar la lógica para registrar al usuario
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Logo src={logo} alt="EcoKids Logo" />
        <Title>Register</Title>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="number" // Campo numérico para la edad
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Register</Button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;