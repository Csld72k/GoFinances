//  For some reason here I'm facing a problem with type "O elemento de associação 'theme' tem implicitamente um tipo 'any'.ts(7031)"

import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: any }) => theme.colors.background};

`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }: { theme: any }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
flex-direction: row;
align-items: center;
gap: 17px;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 50px;
`;

export const User = styled.View``;

export const UserGreeting = styled.Text`
color: ${({ theme }: { theme: any }) => theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({ theme }: { theme: any }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
color: ${({ theme }: { theme: any }) => theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({ theme }: { theme: any }) => theme.fonts.bold};
`;

export const Icon = styled(Ionicons)`
color: ${({ theme }: { theme: any }) => theme.colors.secondary};
font-size: ${RFValue(24)}px;
`;