const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    idFatura: {type: String },
    idUsuario: {type: String },
    nomeDaEmpresa: { type: String, require: 'Nome da empresa é obrigatorio!' },
    valor: {type: Number },
    dataDeVencimento: { type: Date, default: Date.now },
    pagou: {type: Boolean }
};

var faturaSchema = new Schema(_schema);


module.exports = faturaSchema;
