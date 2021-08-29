const { json } = require('body-parser');
const express = require('express')
const shell = require('shelljs')
const animalsCrud = require('./crudContainer');
const actionCom = require('./actionCom');
const server = express()
const routes = require('./routes/routes');

server.use(express.json({limit: '20mb'}));
server.use(express.urlencoded({ extended: false, limit: '20mb' }))
server.set('view engine', 'ejs')
server.set("views",__dirname + "/views")

server.listen(4000, function() {
    console.log('http server on 4000 port')
});

server.get('/actionCom', function(req,res) {
    //const index = req.query.animalIndex - 1;
    const index = 4;
    console.log(index)
    if(index<2) {
        res.send("haciendo ping al servidor");
    } else {
        res.send('haceindo ping')
        shell.exec('./pingtoservers.sh')
        shell.exit(1);
    }
});

actionCom.get(server, shell);
//animalGetter.get(server,animalsCrud);

//animalPoster.post(server,animalsCrud);
routes.get(server, '/', "index")

//routes.get(server, '/actionCom', "com");

