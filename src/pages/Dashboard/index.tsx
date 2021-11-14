import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProviderList,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = React.useState<Provider[]>([]);
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    // navigate('Profile');
    signOut();
  }, [navigate]);

  useEffect(() => {
    api.get('/providers').then((response) => {
      setProviders(response.data);
    });
  }, [user]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user?.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user?.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProviderList
        data={providers}
        keyExtractor={(provider) => provider.id}
        renderItem={({ item }) => <UserName>{item?.name}</UserName>}
      />
    </Container>
  );
};

export default Dashboard;
