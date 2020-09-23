import React, { Component } from 'react'
import { Text, SafeAreaView, View } from 'react-native'

import { Container, Base_container, Main } from '../../components/global-styles'
import { Header, Tittle_Header, Search_Container, Icon_Container, Search_Input } from './styles';

import IconSearch from 'react-native-vector-icons/Ionicons'

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
                        <Base_container>
                            {/* círculo */}
                            {/* icone plataformas */}
                        </Base_container>

                        <Base_container>
                            {/* imagem */}
                            {/* titulo */}
                            {/* plataforma */}
                            {/* preço */}
                        </Base_container>
                    </Main>
                </Container>
            </SafeAreaView>
        )
    }

}

