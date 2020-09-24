import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'

import { Container, Base_container, Main } from '../../components/global-styles'

import {
    Header,
    Tittle_Header,
    Search_Container,
    Icon_Container,
    Search_Input,
    Item_Platform,
    Icon_Platform,
    Horizontal_Scroll,
    Game_Tittle,
    Game_Platforms,
    Game_Price,
    Button_Details,
    Text_Button
} from './styles';

import IconSearch from 'react-native-vector-icons/Ionicons'

import IconPlaystation from '../../assets/images/playstation.png'
import IconXbox from '../../assets/images/xbox.png'
import IconWiiu from '../../assets/images/wiiu.png'
import IconPc from '../../assets/images/pc.png'
import IconSwitch from '../../assets/images/switch.jpg'
import Spider from '../../assets/images/spider-man.png'

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Header>
                        <Tittle_Header>
                            Jogos disponíveis
                        </Tittle_Header>

                        <Search_Container>
                            <Search_Input placeholder="Procure por um jogo" />

                            <Icon_Container>
                                <IconSearch name="md-search" size={30} color="#fff" />
                            </Icon_Container>

                        </Search_Container>
                    </Header>

                    <Main>
                        <Text style={{ top: 12, fontSize: 15 }}>
                            Deslize para ver mais
                        </Text>
                        <Base_container>
                            <Horizontal_Scroll horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
                                <Item_Platform style={styles.shadow}>
                                    <Icon_Platform
                                        source={IconPlaystation}
                                    />
                                </Item_Platform>

                                <Item_Platform style={styles.shadow}>
                                    <Icon_Platform
                                        source={IconXbox}
                                    />
                                </Item_Platform>

                                <Item_Platform style={styles.shadow}>
                                    <Icon_Platform
                                        style={{ height: 40, width: 40 }}
                                        source={IconPc}
                                    />
                                </Item_Platform>

                                <Item_Platform style={styles.shadow}>
                                    <Icon_Platform
                                        source={IconSwitch}
                                    />
                                </Item_Platform>

                                <Item_Platform style={styles.shadow}>
                                    <Icon_Platform
                                        source={IconWiiu}
                                    />
                                </Item_Platform>

                            </Horizontal_Scroll>
                        </Base_container>

                        <Base_container>
                            {/* imagem */}
                            <Image
                                style={{maxHeight:360, width:'100%'}}    
                                source={Spider}
                            />

                            <Game_Tittle> Spider-man </Game_Tittle>
                            <Game_Platforms> PS3/PS4/PC </Game_Platforms>
                            <Game_Price> R$160,00 </Game_Price>
                            <Button_Details>
                                <Text_Button>Mais detalhes</Text_Button>
                            </Button_Details>
                        </Base_container>
                    </Main>
                </Container>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
}) 