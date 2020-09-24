import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import colors from '../../components/colors';
import fonts from '../../components/fonts';

const { height, width } = Dimensions.get('window')

export const Header = styled.View`
    width:100%;
    padding: 5% 14px;
`

export const Text_Medium = styled.Text`
    font-family:${fonts.poppins_medium};
    color: ${colors.color_primary};

    font-size:20px;
`


export const Button_Previous = styled.TouchableOpacity`
    flex-direction: row;
`

export const Tittle_Game = styled.Text`
    font-size:22px;
    color: ${colors.color_text};
    text-align: center;
    font-family:${fonts.poppins_medium};
`

export const Game_Image = styled.Image`
    height: 400px;
    width: ${width * 0.25}%;
    align-self:center;
    margin-top:15px;
`

export const Text_Regular = styled.Text`
    font-size:18px;
    color: ${colors.color_primary_darker};
    font-family:${fonts.poppins_medium};
    margin-top:30px;
`

export const Text_Complement = styled.Text`
    font-size:16px;
    color: ${colors.color_text_base};
    font-family:${fonts.poppins_regular};
`
export const Text_Info = styled.Text`
    font-size:16px;
    color: ${colors.color_link};
    font-family:${fonts.poppins_medium};
    text-align:center;
    margin-top:30px;
`

export const Game_Description = styled.Text`
    font-size:16px;
    color: ${colors.color_text_base};
    font-family:${fonts.poppins_regular};
    line-height:23px;
`

export const Game_Price = styled.Text`
    font-size:25px;
    color: ${colors.color_primary};
    font-family:${fonts.poppins_medium};
`

export const RowDiscount = styled.View`
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`
export const InputDiscount = styled.TextInput`
    width:80%;
    height:40px;
    background-color:${colors.color_background};
    border-width:1px;
    border-color:#ddd;
    padding: 5px;
    font-size:15px;
`
export const HorizontalLine = styled.View`
    border-width:0.5px;
    border-color:#ddd;
    width: 70%;
    align-self:center;
    margin-top:14px;
`

export const ButtonCodeReader = styled.TouchableOpacity`
    align-self:center;
    margin-top:10px;
`

export const TextButton = styled.Text`
    color:${colors.color_link};
    font-size:17px;
    font-family:${fonts.poppins_medium};
`

export const PriceContainer = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
`

export const TittlePriceSection = styled.Text`
    font-size:18px;
    color: ${colors.color_text};
    font-family:${fonts.poppins_regular};
    margin-top:30px;
    text-align:center;
`

export const GamePrice = styled.Text`
    font-size:26px;
    color: ${colors.color_primary};
    font-family:${fonts.poppins_medium};
`

export const ButtonBuyGame = styled.TouchableOpacity`
    width:150px;
    border-radius:12px;
    align-items:center;
    justify-content:center;
    background-color:${colors.color_secundary};
`

export const TextButtonWhite = styled.Text`
    font-size:17px;
    color: ${colors.color_white};
    font-family:${fonts.poppins_medium};
`

export const StoreContainer = styled.View`
    flex-direction:row;
`

export const StoreName = styled.Text `
    font-size:18px;
    color: ${colors.color_text};
    font-family:${fonts.poppins_regular};
`