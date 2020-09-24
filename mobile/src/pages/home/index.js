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
    Text_Button,
    SubTittle
} from './styles';

import IconSearch from 'react-native-vector-icons/Ionicons'

import IconPlaystation from '../../assets/images/playstation.png'
import IconXbox from '../../assets/images/xbox.png'
import IconWiiu from '../../assets/images/wiiu.png'
import IconPc from '../../assets/images/pc.png'
import IconSwitch from '../../assets/images/switch.jpg'
import Spider from '../../assets/images/spider-man.png'

import api from '../../services/api'
import fonts from '../../components/fonts';
import colors from '../../components/colors';

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            games: [],
            platform: 'Todas',
            error: false
        }
    }

    componentDidMount = () => {
        this.loadGames()

    }

    componentDidUpdate = () => {
        if (this.state.platform !== 'Todas') {
            this.loadGamesFiltered()
        }
    }

    loadGames = async () => {
        await api.get('/games')
            .then(response => {
                console.log(response.data)
                this.setState({ games: response.data })
            }).catch(error => {
                if (!error.response) {
                    this.setState({ error: true })
                } else {
                    this.errorStatus = error.response.data.message;
                }
            })
    }

    loadGamesFiltered = async (platform) => {

        // Se a plataforma clicada já estiver selecionada,
        // ela voltará ao normal
        if (platform == this.state.platform) {
            this.setState({ platform: 'Todas' })
            return this.loadGames()
        } else {

            await api.get(`/games/platform/${platform}`)
                .then(response => {
                    this.setState({ platform: platform, games: response.data })
                }).catch(
                    console.log(error.response.data.message)
                )
        }
    }

    addZeros = (num) => {
        let addZeros = num.toFixed(Math.max(((num + '').split(".")[1] || "").length, 2));

        return addZeros.toString().replace(".", ",")
    }

     // Mudando a cor do botão, ao selecionar uma plataforma
    selected = (platform_selected) => {
        const { platform } = this.state

        return platform_selected === platform ? '#c0adc9' : colors.color_background
    }


    render() {
        console.log(this.state.platform)

        const { games, platform } = this.state


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
                        <Base_container>
                            <Text style={{ fontSize: 14, marginBottom: 10, fontFamily: `${fonts.poppins_regular}` }}>
                                Deslize para o lado para ver mais
                        </Text>
                            <Horizontal_Scroll horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>

                                <Item_Platform
                                    style={{ backgroundColor: this.selected('ps') }}
                                    onPress={() => this.loadGamesFiltered('ps')}
                                >
                                    <Icon_Platform
                                        source={IconPlaystation}
                                    />
                                </Item_Platform>

                                <Item_Platform
                                    style={{ backgroundColor: this.selected('xbox') }}
                                    onPress={() => this.loadGamesFiltered('xbox')}
                                >
                                    <Icon_Platform
                                        source={IconXbox}
                                    />
                                </Item_Platform>

                                <Item_Platform
                                    style={{ backgroundColor: this.selected('pc') }}
                                    onPress={() => this.loadGamesFiltered('pc')}
                                >
                                    <Icon_Platform
                                        style={{ height: 40, width: 40 }}
                                        source={IconPc}
                                    />
                                </Item_Platform>

                                <Item_Platform
                                    style={{ backgroundColor: this.selected('switch') }}
                                    onPress={() => this.loadGamesFiltered('switch')}
                                >
                                    <Icon_Platform
                                        source={IconSwitch}
                                    />
                                </Item_Platform>

                                <Item_Platform
                                    style={{ backgroundColor: this.selected('wiiu') }}
                                    onPress={() => this.loadGamesFiltered('wiiu')}
                                >
                                    <Icon_Platform
                                        source={IconWiiu}
                                    />
                                </Item_Platform>

                            </Horizontal_Scroll>
                        </Base_container>

                        <SubTittle>
                            Plataforma selecionada: <Text style={{ color: '#30c949' }} >{platform} </Text>
                        </SubTittle>

                        {games.map(game => (
                            <Base_container key={game.id}>
                                <Image
                                    source={{ uri: game.imagem.trim() }}
                                    style={{ width: '100%', height: 400 }}
                                />

                                <Game_Tittle> {game.nome} </Game_Tittle>
                                <Game_Platforms> {game.plataformas} </Game_Platforms>
                                <Game_Price> R${this.addZeros(game.valor)} </Game_Price>

                                <Button_Details onPress={() => this.loadGames()}>
                                    <Text_Button>Mais detalhes</Text_Button>
                                </Button_Details>

                            </Base_container>
                        ))}
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