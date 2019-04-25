const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    idUsuario: {type: String },
    nomeDaEmpresa: { type: String, require: 'Nome da empresa é obrigatorio!' },
    valor: {type: Number },
    dataDeVencimento: { type: String, default: Date.now.toString() },
    pagou: {type: Boolean }
};

var faturaSchema = new Schema(_schema);


module.exports = faturaSchema;
