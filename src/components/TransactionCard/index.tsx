import React from 'react';

import {
  Container,
  Tittle,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './style';

export function TransactionCard() {
  return (
    <Container>
      <Tittle>Desenvolvimento de site</Tittle>
      <Amount>R$12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  )
}