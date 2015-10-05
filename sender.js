var nodemailer = require('nodemailer');

exports.send = function(){

	var transportador = nodemailer.createTransport({
	    service: 'hotmail', //se for gmail use "gmail"
	    auth: {
	        user: 'seuemail@outlook.com',
	        pass: 'suasenha'
	    }
	});

	var configuracoes = {
	    from: 'Seu Nome <seuemail@gmail.com>',
	    to: 'Nome do Destinatário <emaildodestinatario@gmail.com>, Outra Pessoa <outra@email.com>',
	    subject: 'Assunto do Email',
	    text: 'Conteúdo do email em texto, lembrando que se tiver HTML vai sobrepor',
	    html: '<h1>Conteúdo do email em HTML</h1>'
	};

	transportador.sendMail(configuracoes, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Email enviado ' + info.response);
	    }
	});
}