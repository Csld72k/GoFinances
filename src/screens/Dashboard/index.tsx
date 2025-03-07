import React from 'react';

import { HighlightCard } from '../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../components/TransactionCard';

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
  Tittle,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}
export function Dashboard() {

  const data: DataListProps = [
    {
      id: '1',
      type: 'positive',
      tittle: 'Desenvolvimento de site',
      amount: 'R$12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '04/03/2025'
    },
    {
      id: '2',
      type: 'negative',
      tittle: 'Hamburgueria Pizzy',
      amount: 'R$59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '04/03/2025'
    },
    {
      id: '3',
      type: 'negative',
      tittle: 'Aluguel do apartamento',
      amount: 'R$1.200,00',
      category: {
        name: 'Casa',
        icon: 'home'
      },
      date: '04/03/2025'
    }
  ]

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
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>

    </Container >
  )
}