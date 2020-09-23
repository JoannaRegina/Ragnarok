import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import colors from '../../components/colors';
import fonts from '../../components/fonts';

export const Header = styled.View`
    width:100%;
    height:200px;
    background-color:${colors.color_primary_darker};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`