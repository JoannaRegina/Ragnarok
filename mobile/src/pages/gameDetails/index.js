import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'

import { Container, Base_container, Main } from '../../components/global-styles'
import { Header, Text_Medium, Button_Previous, Tittle_Game, Game_Image, Text_Regular, Text_Complement, Text_Info, Game_Description, Game_Price, RowDiscount, InputDiscount, HorizontalLine, ButtonCodeReader, TextButton, PriceContainer, GamePrice, ButtonBuyGame, TextButtonWhite, TittlePriceSection, StoreContainer, StoreName } from './styles';

import IconArrow from 'react-native-vector-icons/Ionicons'
import IconCheck from 'react-native-vector-icons/Ionicons'
import IconLocal from 'react-native-vector-icons/Entypo'


import colors from '../../components/colors';

import SpiderMan from '../../assets/images/SpiderMan.png'

export default class GameDetails extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Header>
                        <Button_Previous>
                            <IconArrow
                                name={'md-arrow-back'}
                                size={25}
                                color={colors.color_primary}
                                style={{ marginTop: 28 }}
                            />

                            <Text_Medium style={{ marginLeft: 5, marginTop: 26 }} >Voltar</Text_Medium>
                        </Button_Previous>
                    </Header>

                    <Main>
                        {/* Titulo jogo */}
                        <Tittle_Game>
                            Spider-man
                        </Tittle_Game>

                        {/* Imagem jogo */}
                        <Game_Image
                            source={SpiderMan}
                        />

                        {/* text_regular_center */}
                        <Text_Regular
                            style={{ textAlign: "center" }}>
                            Informações:
                        </Text_Regular>

                        <Base_container style={{ paddingLeft: 17, paddingRight: 17 }}>
                            <Game_Description>
                                Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac.
                                Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens,
                                mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos
                                Homem-Aranha da Marvel Comics, tendo sido lançado
                           </Game_Description>

                            {/* <Game_Price>R$160,00</Game_Price> */}
                        </Base_container>

                        <HorizontalLine style={{ marginTop: '10%' }} />

                        <Text_Regular style={{ textAlign: "left" }}>
                            Desconto
                        </Text_Regular>

                        <Text_Complement>Para aplicar o desconto, insira ou leia um código válido. </Text_Complement>

                        <Base_container>
                            <RowDiscount>
                                <InputDiscount placeholder={'Insira um código válido'} />
                                <IconCheck name={"md-checkbox"} size={45} color={colors.color_primary_darker} />
                            </RowDiscount>

                            <HorizontalLine />

                            <ButtonCodeReader>
                                <TextButton>Ler código QR</TextButton>
                            </ButtonCodeReader>
                        </Base_container>

                        {/* Valor com desconto */}
                        <Base_container>
                            <Text_Complement style={{ marginTop: 0, color: colors.color_text }}>
                                Valor do produto: R$160,00
                            </Text_Complement>

                            <Text_Complement style={{ marginTop: 0, color: colors.color_text }}>
                                Desconto: R$10,00
                            </Text_Complement>
                        </Base_container>

                        <HorizontalLine style={{ marginTop: '10%' }} />

                        <TittlePriceSection>
                            Valor Total
                        </TittlePriceSection>

                        <Base_container style={{ marginTop: 0 }}>
                            <PriceContainer>
                                <GamePrice>
                                    R$150,00
                                </GamePrice>
                                <ButtonBuyGame>
                                    <TextButtonWhite>
                                        Comprar
                                    </TextButtonWhite>
                                </ButtonBuyGame>
                            </PriceContainer>
                        </Base_container>

                        <HorizontalLine style={{ marginTop: '10%' }} />

                        {/* Lojas */}
                        <Text_Info>
                            Esse produto também está disponível em nossas seguintes unidades:
                        </Text_Info>

                        <Base_container>
                            <StoreContainer>
                                <IconLocal name={"location-pin"} size={27} color={"#c95050"}/>
                                <StoreName>Loja Tamboré</StoreName>
                            </StoreContainer>
                        </Base_container>
                    </Main>
                </Container>
            </SafeAreaView>
        )
    }
}