import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logo} />
  </Container>
);

export default SignIn;
