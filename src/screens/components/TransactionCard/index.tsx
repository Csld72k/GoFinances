import React from "react";

import {
  Container,
  Tittle,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from "./style";

interface Category {
  name: string;
  icon: string;
}

interface Data {
  type: 'positive' | 'negative';
  tittle: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: { Data }
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>

      <Tittle>
        {data.tittle}
      </Tittle>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>
        <Date>
          {data.date}
        </Date>
      </Footer>

    </Container>
  )
}