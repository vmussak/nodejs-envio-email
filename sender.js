var nodemailer = require('nodemailer');

var transportador = nodemailer.createTransport({
	    service: 'hotmail', //para contas gmail use "gmail"
	    auth: {
	        user: 'seuemail@outlook.com',
	        pass: 'suasenha'
	    }
	});

exports.send = function(){
	
	var configuracoes = {
	    from: 'Seu Nome <seuemail@gmail.com>',
	    to: 'Nome do Destinatário <emaildodestinatario@gmail.com>, Outra Pessoa <outra@email.com>',
	    subject: 'Assunto do Email',
	    text: 'Conteúdo do email em texto',
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