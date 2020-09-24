const express =  require('express');
const DBconnection = require('./src/config/db_connection')
const routes = require('./src/routes')
const cors = require('cors')

const app = express();

// app.use(cors())

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());

app.use(routes)



// app.get('/games', (req, res) => {
//     var sql = 'SELECT * FROM tbl_games';

//     DBconnection.query(sql, ( err, datas ) => {
//         if(err) throw err;
      
//         return res.json(datas)
//     });

// });

// app.get('/games/id/:id', (req, res) => {
//     const { id } = req.params

//     var sql = `SELECT * FROM tbl_games WHERE id = ${id}`;

//     DBconnection.query(sql, ( err, data ) => {
//         if(data == '') {
//             return res.status(400).json({message: "Nenhum jogo foi encontrado."}) 
//         }
      
//         return res.json(data)
//     });
// });


// app.get('/games/platform/:platform', (req, res) => {
//     const { platform } = req.params

//     var sql = `SELECT * FROM tbl_games WHERE plataformas LIKE '%${platform}%';`;

//     DBconnection.query(sql, ( err, data ) => {
//         if(data == '') {
//             return res.status(400).json({message: "Nenhum jogo foi encontrado."}) 
//         }

//         return res.json(data)
//     });
// });





app.listen(3333);