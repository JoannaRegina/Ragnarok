import React, { Component } from 'react'

import './styles.css'

import { Link } from 'react-router-dom'

import { MdPlace } from 'react-icons/md'

import Header from '../header'

import api from '../../services/api'

// export default function GameDetails() {
export default class GameDetails extends Component{


    // const [game, setGame] = useState([])

    constructor(){
        super()
        this.state = {
            game: []
        }
    }

    // const useEffect(() => {
    //     async function loadGameInfo() {
    //         const response = await api.get('/games/id/1')
    //         setGame(response.data)
    //         console.log(response.data)

    //     }

    //     loadGameInfo()

    // }, [])

    componentDidMount(){
        this.loadGameInfo()
    }


    async loadGameInfo(){

        const { id } = this.props.match.params

        const response = await api.get(`/games/id/${id}`)
        this.setState({game: response.data})
        console.log(response.data) 
    }

    addZeros = (num) => {
        let addZeros = num.toFixed(Math.max(((num + '').split(".")[1] || "").length, 2));

        return addZeros.toString().replace(".", ",")
    }


    render(props){
        const { game } = this.state
        console.log(game)


        return (
            // <div id="app">
            <div id="content" className='center'>
                <Header />

                <div id="details-main-container" className="center">
                    <div id="center-content" className="center">
                        <header id="back-to-home">
                            <Link to="/">
                                <strong>Voltar para a página inicial</strong>
                            </Link>
                        </header>

                        <main>
                            {game.map(info => (
                                <section key={info.id} id="section-game-details">

                                    <div id="game-detail-item">
                                        <div id="game-image">
                                            <img src={info.imagem} alt="Imagem do jogo" />
                                        </div>

                                        <div id="game-info">
                                            <header>
                                                <h2>{info.nome}</h2>
                                            </header>

                                            <div id="game-description">
                                                <p>
                                                    {info.descricao}
                                                </p>
                                            </div>

                                            <footer id="game-platforms">
                                                <strong>Plataformas disponíveis</strong>
                                                <h5>{info.plataformas}</h5>
                                            </footer>
                                        </div>
                                    </div>

                                    <footer id="game-price-container">
                                        <div id="game-price">
                                            <h2>
                                                R${this.addZeros(info.valor)}
                                            </h2>
                                            <input id="button-buy-game" type="button" value="comprar" />
                                        </div>
                                        <span>
                                            Ou consulte a disponibilidade nas lojas <br />
                                            físicas abaixo.
                                    </span>
                                    </footer>
                                </section>
                            ))}

                            <hr className="center" />

                            <section id="section-stores">
                                <header>
                                    <h2>Lojas disponíveis</h2>
                                    <h4>Selecione a loja para visualizar a localização no mapa</h4>
                                </header>

                                <main>
                                    <div id="stores-address">
                                        <ul>
                                            <li className="row">
                                                <MdPlace color="#c95050" size={30} />
                                                <a href="#">
                                                    <h4>Loja Tamboré</h4>
                                                </a>
                                            </li>
                                            <li id="address">
                                                Endereço: Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030
                                        </li>

                                            <li className="row">
                                                <MdPlace color="#c95050" size={30} />
                                                <a href="#">
                                                    <h4>Loja Tamboré</h4>
                                                </a>
                                            </li>
                                            <li id="address">
                                                Endereço: Av. Piracema, 669 - Tamboré, Barueri - SP, 06460-030
                                        </li>
                                        </ul>
                                    </div>

                                    <div id="map">
                                        <h1>mapa</h1>
                                    </div>
                                </main>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}