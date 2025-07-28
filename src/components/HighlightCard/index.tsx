import React from 'react';

import {
  Container,
  Header,
  Tittle,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './style';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Tittle>Entrada</Tittle>
        <Icon name='arrow-up-circle' />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>

    </Container>
  )
}
