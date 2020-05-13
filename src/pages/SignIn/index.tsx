import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Input from '../../component/Input';
import Button from '../../component/Button';
import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logo} />
    <Title>Faça seu logon </Title>
    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />
    <Button
      onPress={() => {
        console.log('');
      }}
    >
      Entrar
    </Button>
  </Container>
);

export default SignIn;
