const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://user:user@cluster0-q9itq.mongodb.net/Fatura?retryWrites=true';

mongoose.connect(dbURI,{useNewUrlParser: true});

mongoose.connection.on('connected', function(){
	// eslint-disable-next-line no-console
	console.log('[INFO] Conexão padrão do mongoose aberta no banco: '+ dbURI);
});

mongoose.connection.on('error', function(err){
	// eslint-disable-next-line no-console
	console.log('[ERRO] Conexão padrão do mongoose erro: ' + err);
});

mongoose.connection.on('disconnected', function(){
	// eslint-disable-next-line no-console
	console.log('[INFO] Conexão padrão do mongoose desconectada: ' + dbURI);
});

mongoose.connection.on('open', function(){
	// eslint-disable-next-line no-console
	console.log('[INFO] Conexão padrão do mongoose aberta');
});

// eslint-disable-next-line no-undef
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		// eslint-disable-next-line no-console
		console.log('[INFO] Conexão padrão do mongoose desconectada, app encerrado.');
		// eslint-disable-next-line no-undef
		process.exit(0);
	});
});
