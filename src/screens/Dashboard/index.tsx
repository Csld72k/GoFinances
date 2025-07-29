import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HighlightCard } from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
} from './styles';


export function Dashboard() {
  return (
    <Container>
      <Header style={{ paddingTop: useSafeAreaInsets().top }}>

        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/Csld72k.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Claudiney</UserName>
            </User>
          </UserInfo>

          <Icon name="exit-outline" />
        </UserWrapper>

      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>

    </Container>
  )
}

