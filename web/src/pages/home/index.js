import React, { useEffect, useState, Component } from 'react'
import api from '../../services/api'
import './styles.css'

import Header from '../header'
import Banner from '../banner'
import IconPs from '../../assets/images/playstation.png'
import IconPc from '../../assets/images/pc-platform.png'
import IconXbox from '../../assets/images/xbox-platform.png'
import IconSwitch from '../../assets/images/switch-platform.jpg'
import IconWiiu from '../../assets/images/wiiu-platform.png'

import { Link } from 'react-router-dom'

// export default function Home() {
export default class Home extends Component {

    // const [games, setGames] = useState([])
    // const [platform, setPlatform] = useState('Todas')
    // const [error, setError] = useState(false)

    // useEffect(() => {
    //     if (platform == 'Todas') {
    //         loadGames()
    //     } else {
    //         loadGamesFiltered()
    //     }
    // }, [])

    // const loadGames = async () => {
    //     await api.get('/games').then(response => {
    //         setGames(response.data)
    //         console.log(response.data)
    //     }).catch(error => {
    //         if (!error.response) {
    //             setError(true)
    //         } else {
    //             this.errorStatus = error.response.data.message;
    //         }
    //     })

    // }

    // const loadGamesFiltered = async (platform) => {
    //     await api.get(`/games/platform/${platform}`).then(response => {
    //         console.log(response.data)
    //         setPlatform(platform)
    //         setGames(response.data)

    //     }).catch(

    //     )

    // }

    constructor() {
        super()
        this.state = {
            games: [],
            platform: '',
            error: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        this.loadGames()
    }

    // carregando os jogos filtrados
    componentDidUpdate = () => {
        if (this.state.platform !== 'Todas') {
            this.loadGamesFiltered()
        }
    }

    // carregando jogos
    loadGames = async () => {
        this.setState({ platform: 'Todas' })
        await api.get('/games').then(response => {
            this.setState({ games: response.data })
        }).catch(error => {
            if (!error.response) {
                this.setState({ error: true })
            } else {
                this.errorStatus = error.response.data.message;
            }
        })

    }

    // buscando os jogos baseado na plataforma selecionada
    loadGamesFiltered = async (platform) => {
        let plat = platform

        await api.get(`/games/platform/${plat}`).then(response => {
            this.setState({ platform: platform, games: response.data })
        }).catch(error => {
            console.log(error.response.data.message)
        }

        )

    }

    // capturando o valor do evento e carregando
    // a lista de jogos
    handleChange(event) {
        let value = event.target.value
        this.setState({ platform: value });

        this.loadGamesFiltered(value)
    }

    // função responsável por verificar e adicionar um oi dois
    // zeros ao final do número
    // ao final o numero é retornado com a substituição do (.) pela (,)
    addZeros = (num) => {
        let addZeros = num.toFixed(Math.max(((num + '').split(".")[1] || "").length, 2));

        return addZeros.toString().replace(".", ",")
    }


render() {

    const { games, platform, error } = this.state

    return (
        <div id="app">
            <div id="main" className='center'>

                <Header />

                {/* <div id="banner">
                        <Banner />
                    </div> */}

                <div id="center-content" className="center">
                    <div id="platforms-session">

                        <header>
                            <h2 className="tittle-session">Plataformas</h2>
                        </header>

                        <main id="platforms">

                            <div id="platform-block">
                                <img src={IconPs} alt="Ícone plataforma Playstation" />

                                <select name="playstation" onChange={this.handleChange}>
                                    <option disabled selected value="none">
                                        playstation
                                        </option>

                                    <option value="ps3">PS3</option>
                                    <option value="ps4">PS4</option>
                                </select>
                            </div>

                            <div id="platform-block">
                                <img src={IconXbox} alt="Ícone plataforma XBox" />

                                <select onChange={this.handleChange} name="xbox">
                                    <option disabled selected value="none">
                                        XBOX
                                    </option>

                                    <option value="xbox">XBox</option>
                                    <option value="xboxOne">XBox One</option>
                                </select>
                            </div>

                            <div onClick={() => this.loadGamesFiltered('pc')} id="platform-block">
                                <img src={IconPc} alt="Ícone plataforma computador" />
                                <a href="#">PC</a>
                            </div>


                            <div onClick={() => this.loadGamesFiltered('switch')} id="platform-block">
                                <img src={IconSwitch} alt="Ícone plataforma Switch Nitendo" />
                                <a href="">SWITCH</a>
                            </div>

                            <div onClick={() => this.loadGamesFiltered('wiiu')} id="platform-block">
                                <img src={IconWiiu} alt="Ícone plataforma Wiiu Nitendo" />
                                <a href="">WIIU</a>
                            </div>
                        </main>
                    </div>

                    <div id="session-games-available">

                        <header id="columm-container">
                            <div id="row-container">
                                <h2 className="tittle-session">Jogos disponíveis</h2>
                                <input type="text" placeholder="Pesquisar" />
                            </div>

                            <div className="row">
                                <h4>Plataforma selecionada: <strong
                                    style={{ color: '#30c949', fontSize: 17 }}>
                                    {platform} </strong>
                                </h4>

                                {/* certificando de que a opção "desfazer" aparecerá apenas 
                                    quando uma plataforma for selecionada 
                                */}
                                {platform !== 'Todas' ?
                                    <span onClick={() => this.loadGames()}>Desfazer</span> : null
                                }

                            </div>
                        </header>

                        <main id="container-games">
                        {/* será exibido uma mensagem de carregamento enquanto a requisição estiver sendo feita */}
                        {/* uma mensagem de erro irá informar o usuário de que não foi possível fazer a reqisição */}
                            {
                                (error == false && games.length == 0) ?
                                    <strong className="error">Carregando jogos...</strong> :
                                    error == true && games.length == 0 ?
                                        <strong className="error">nada encontrado. Verifique sua conexão</strong> : null
                            }

                            {games.map(game => (
                                <Link to={`/games/id/${game.id}`}>
                                    <div key={game.id} id="game-item">
                                        <img src={game.imagem} alt="Imagem do jogo" />
                                        <div id="game-details">
                                            <h4>{game.nome}</h4>
                                            <h6>{game.plataformas}</h6>
                                            <h3>
                                                R${this.addZeros(game.valor)}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </main>
                    </div>
                </div>
            </div>
        </div >
    )
}
}