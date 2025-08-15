const http = require('http');
const porta = 3000  

const server = http.createServer((req, res) => {
    
    //Mostra a rota solicitada
    url = req.url
    console.log('url: ',url);

    //Aqui vão as Rotas
    //res.end('inicio do projeto'); //sera excluido no prox. passo
    if(url === '/') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<h1>Supermercado Pague Mais</ul>');
    } 
    else if(url === '/verduras'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<ul><li>Alface</li><li>Rúcula</li></ul>');
    }
    else if(url === '/frutas'){ //mais uma rota
        res.writeHead(200,'ok', { 'Content-Type': 'text/html; charset=utf-8'})
        res.end('<ul><li>Abacaxi</li><li>Uva</li><li>Tomate</li></ul>');
    }
    else if(url === '/carnes'){ //mais uma rota
   res.writeHead(200,'ok', { 'Content-Type': 'text/html; charset=utf-8'})
        res.end('<ul><li>Frango</li><li>Carne Bovina</li><li>Peixe</li></ul>');
    }
    else if(url === '/bebidas'){ //mais uma rota
   res.writeHead(200,'ok', { 'Content-Type': 'text/html; charset=utf-8'})
        res.end('<ul><li>Água</li><li>Suco de Laranja</li><li>Refrigerante</li></ul>');
    }
        else {
       res.writeHead(404,'Pagina não encontrada',{ 'Content-Type': 'text/html; charset=utf-8' }) //rota nao cadastrada
       res.end('Pagina não encontrada');
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});