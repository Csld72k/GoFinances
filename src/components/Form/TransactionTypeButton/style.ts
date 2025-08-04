import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: ${({ isActive }: { isActive: boolean }) => isActive ? 0 : .5}px solid ${({ theme }: { theme: any }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }: { isActive: boolean; type: 'up' | 'down' }) => isActive && type === 'up' && css`
    background-color: ${({ theme }: { theme: any }) => theme.colors.success_light};
    border-color: ${({ theme }: { theme: any }) => theme.colors.attention};
  `};

  ${({ isActive, type }: { isActive: boolean; type: 'up' | 'down' }) => isActive && type === 'down' && css`
    background-color: ${({ theme }: { theme: any }) => theme.colors.attention_light};
    border-color: ${({ theme }: { theme: any }) => theme.colors.attention};
  `};
`

export const Icon = styled(Feather) <IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }: { theme: any, type: any }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: { theme: any }) => theme.fonts.regular};
`;