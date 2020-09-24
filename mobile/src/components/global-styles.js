// Global componentes
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export const Container = styled.ScrollView `
    flex: 1;
    background-color: ${colors.color_background};
`;

export const Main = styled.View `
    background-color: ${colors.color_background};
    padding: 8px 12px;
`;

export const Base_container = styled.View `
    background-color:${colors.color_white};
    padding: 10px 10px;
    border-radius: 10px;
    margin-top:20px;
    max-height:550px;
`