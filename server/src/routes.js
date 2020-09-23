const express =  require('express');
const GamesController = require ('./controllers/GamesController');

const routes = express.Router();
const gamesController = new GamesController();

routes.get('/games', gamesController.show);
routes.get('/games/id/:id', gamesController.findbyId);
routes.get('/games/platform/:platform', gamesController.filteredPlatforms);

module.exports = routes


