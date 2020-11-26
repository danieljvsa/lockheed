const connection = require('../database/connection')

module.exports = {
    async index (req, res) {

    connection.query('SELECT * FROM informacao LIMIT 10;', function(err, rows, fields){
            if(!err){
                res.json(rows)
            }else{
                res.json('Erro ao realizar a consulta: ', err)
            }
        });
        
    }
}


