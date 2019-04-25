var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var faturas = require('../models/fatura.js');

const faturaModel = mongoose.model('Fatura', faturas);

module.exports = function (app) {

    const listar = (req, res) => {
        // eslint-disable-next-line no-console
        //console.log('Listar');
        const query = {};
        litarFatura(query, res);
    };

    const consultar = (req, res) => {
        // eslint-disable-next-line no-console
        const query = { _id: req.params.idFatura };
        // eslint-disable-next-line no-console
        console.log(query)

        faturaModel.findOne(query, function (err, fatura) {
            //res.header("Access-Control-Allow-Origin", "*");
            res.json(fatura);
        });
    };


    const adicionar = (req, res) => {

        res.header("Access-Control-Allow-Origin", "*");
        // eslint-disable-next-line no-console
        console.log(req.body);
        
        const fatura = new faturaModel(req.body);
        // eslint-disable-next-line no-console
        console.log('dicionar');
        // eslint-disable-next-line no-console
        console.log(fatura.nomeDaEmpresa)

        fatura.save(function (err) {
            if (err) {
                // eslint-disable-next-line no-console
                console.log("Falha ao salvar.");
                res.status(400).send("Falha ao salvar o fatura.");
                return;
            }
            res.json(fatura);
            return;
        });
    };

    const editar = (req, res) => {

        // eslint-disable-next-line no-console
        console.log('Editar');
        const fatura = req.body;

        // eslint-disable-next-line no-unused-vars
        faturaModel.findByIdAndUpdate(fatura._id, fatura, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send("Salvo com sucesso!");
        });

    };

    const remover = (req, res) => {

        // eslint-disable-next-line no-console
        console.log('Remover');
        //const fatura = req.body;
       //new ObjectId(req.params.id)}
      // eslint-disable-next-line no-console
      console.log(req.params.id);


        faturaModel.findByIdAndDelete(new ObjectId(req.params.id),(err)=>{
            if(err){
                return res.send("Erro! não é possivel remover fatura");
            }
            return res.send("Removido com sucesso!");
        });
        
    };


    app.get('/faturas/:idFatura', consultar);
    app.get('/faturas', listar);
    app.post('/faturas/fatura', adicionar);
    app.put('/faturas/fatura', editar);
    app.delete('/faturas/:id', remover);

};
function litarFatura(query, res) {
    faturaModel.find(query, function (err, faturas) {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(faturas);
    });
}

