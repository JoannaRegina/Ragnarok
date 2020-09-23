import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import GameDetails from './pages/GameDetails'


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={GameDetails} path="/games/id/:id"  />
        </BrowserRouter>
    )
}

export default Routes;