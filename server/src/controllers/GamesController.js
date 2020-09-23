const express = require('express');
const DBconnection = require('../config/db_connection')


class GamesController {
    show (req, res){
        var sql = 'SELECT * FROM tbl_games';

        DBconnection.query(sql, (err, datas) => {
            if (err) throw err;

            return res.json(datas)
        });

    }

    findbyId(req, res) {
        const { id } = req.params

        var sql = `SELECT * FROM tbl_games WHERE id = ${id}`;

        DBconnection.query(sql, (err, data) => {
            if (data == '') {
                return res.status(400).json({ message: "Nenhum jogo foi encontrado." })
            }

            return res.json(data)
        });
    }

    filteredPlatforms(req, res) {
        const { platform } = req.params

        var sql = `SELECT * FROM tbl_games WHERE plataformas LIKE '%${platform}%';`;

        DBconnection.query(sql, (err, data) => {
            if (data == '') {
                return res.status(400).json({ message: "Nenhum jogo foi encontrado." })
            }

            return res.json(data)
        });
    }
}



module.exports = GamesController