//  For some reason here I'm facing a problem with type "O elemento de associação 'theme' tem implicitamente um tipo 'any'.ts(7031)"

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: { theme: any }) => theme.colors.background};

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  color: ${({ theme }: { theme: any }) => theme.colors.title};
`;