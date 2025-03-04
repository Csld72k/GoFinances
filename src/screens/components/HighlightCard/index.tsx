import React from "react";

import {
  Container,
  Header,
  Tittle,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from "./style";

interface Props {
  tittle: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}
export function HighlightCard({ tittle, amount, lastTransaction, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Tittle type={type}>
          {tittle}
        </Tittle>
        <Icon
          name={icon[type]}
          type={type}
        />
      </Header>

      <Footer>
        <Amount
          type={type}>
          {amount}
        </Amount>
        <LastTransaction
          type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  )
}