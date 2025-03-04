import React from 'react';
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
  HighlightCards,
  Transactions,
  Tittle
} from './styles';

import { HighlightCard } from '../components/HighlightCard';
import { TransactionCard } from '../components/TransactionCard';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/84917784?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Claudiney</UserName>
            </User>
          </UserInfo>
          <Icon name='log-out-outline' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type='up'
          tittle='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 03 de abril'
        />

        <HighlightCard
          type='down'
          tittle='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
        />

        <HighlightCard
          type='total'
          tittle='Total'
          amount='R$ 16.131,00'
          lastTransaction='01 a 06 de abril'
        />

      </HighlightCards>

      <Transactions>
        <Tittle>Listagem</Tittle>
        <TransactionCard />
      </Transactions>

    </Container >
  )
}