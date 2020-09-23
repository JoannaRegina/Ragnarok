import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import colors from '../../components/colors';
import fonts from '../../components/fonts';

const { height, width } = Dimensions.get('window')

export const Header = styled.View`
    width:100%;
    height:200px;
    background-color:${colors.color_primary_darker};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    /* padding-top:25%; */
    padding: 25% 14px;
`

export const Tittle_Header = styled.Text`
    color: ${colors.color_white};
    font-family: ${fonts.poppins_medium};
    font-size: 30px;
`

export const Search_Container = styled.View`
    width:100%;
    height:40px;

    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    border-radius:50px;
    padding-right:2px;
    background-color:${colors.color_white};

`
export const Icon_Container = styled.TouchableOpacity`
    width:38px;
    height:38px;

    background-color:${colors.color_primary_lighter};
    border-radius:50px;

    justify-content:center;
    align-items:center;

`

export const Search_Input = styled.TextInput`
    width:80%;
    height: 40px;
    border-radius:50px;
    padding-left:8px;
    background-color:${colors.color_white};
`