import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: any }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }: { theme: any }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: center;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: any }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }: { theme: any }) => theme.colors.shape};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  
  padding: 24px;
`;

export const Fields = styled.View`
  /* flex: 1; */
  /* width: 100%; */
  /* padding: 24px; */
`;