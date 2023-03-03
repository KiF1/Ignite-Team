import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'primay' | 'secondary';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'primay' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({theme}) => css `
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`