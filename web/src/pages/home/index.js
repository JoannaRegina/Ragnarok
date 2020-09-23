import React, { useEffect, useState } from 'react'
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

export default function Home() {

    const [games, setGames] = useState([])
    const [platform, setPlatform] = useState('Todas')
    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadGames() {
            const response = await api.get('/games').then(response => {
                setGames(response.data)
                console.log(response.data)
            }).catch(error => {
                if (!error.response) {
                    setError(true)
                    console.log('AAAAAAAAAAAAAAAAAAAAA')
                } else {
                    this.errorStatus = error.response.data.message;
                }
            })

        }

        loadGames()
    }, [])

    // useEffect(() => {
    //     if (platform == 'pc') {
    //         async function loadGames() {
    //             // const response = await api.get(`/games/platform/${platform}`)
    //             // setGames(response.data)
    //             // console.log(response.data)
    //             alert('CLICADO')
    //         }

    //         loadGames()
    //     }
    // }, [1000])

    // const loadGamesFiltered = () => {
    //     if (platform !== 'Todas') {
    //         const response = api.get(`/games/platform/${platform}`)
    //         setGames(response.data)
    //         console.log(response.data)
    //         alert('CLICADO')
    //     }
    // }

    const addZeros = (num) => {
        let addZeros = num.toFixed(Math.max(((num + '').split(".")[1] || "").length, 2));

        return addZeros.toString().replace(".", ",")
    }


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

                                <select name="playstation" id="">
                                    <option selected value="none">
                                        playstation
                            </option>

                                    <option value="ps3">PS3</option>
                                    <option value="ps4">PS4</option>
                                </select>
                            </div>

                            <div id="platform-block">
                                <img src={IconXbox} alt="Ícone plataforma XBox" />

                                <select name="xbox" id="">
                                    <option selected value="none">
                                        XBOX
                            </option>

                                    <option value="xbox">XBox</option>
                                    <option value="xboxOne">XBox One</option>
                                </select>
                            </div>

                            <div onClick={() => setPlatform('pc')} id="platform-block">
                                <img src={IconPc} alt="Ícone plataforma computador" />
                                <a href="#">PC</a>
                            </div>


                            <div id="platform-block">
                                <img src={IconSwitch} alt="Ícone plataforma Switch Nitendo" />
                                <a href="">SWITCH</a>
                            </div>

                            <div id="platform-block">
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
                                {platform !== 'Todas' ?
                                    <span onClick={() => setPlatform('Todas')}>Desfazer</span> : null
                                }
                            </div>

                        </header>

                        <main id="container-games">
                                {
                                    (error == false && games.length == 0) ?
                                        <strong className="error">Carregando jogos...</strong> :
                                        error == true && games.length == 0 ?
                                            <strong className="error">nada encontrado. Verifique sua conexão</strong> : null
                                }
                            {/* </div> */}

                            {games.map(game => (
                                <Link to={`/games/id/${game.id}`}>
                                    <div key={game.id} id="game-item">
                                        <img src={game.imagem} alt="Imagem do jogo" />
                                        <div id="game-details">
                                            <h4>{game.nome}</h4>
                                            <h6>{game.plataformas}</h6>
                                            <h3>
                                                R${addZeros(game.valor)}
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