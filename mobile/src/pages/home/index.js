import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'

import { Container, Base_container } from '../../components/global-styles'
import { Header } from './styles';

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
                        {/* icone ragna */}
                        {/* titulo */}
                        {/* barra de pesquisa */}
                    </Header>

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
                    
                </Container>
            </SafeAreaView>
        )
    }

}

