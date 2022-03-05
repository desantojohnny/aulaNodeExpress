const express = require('express');

const { append } = require('express/lib/response');

const server  = express()

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const usuarios = [{id:1, nome:"Johnny", sobrenome:"Santo"}, {id:2, nome:"Bruna", sobrenome:"Santo"}];

server.get("/", (req,res) => {
    res.send(usuarios)
})

server.get("/:id", (req,res) => {
    const {id} = req.params

    const aux = usuarios.find((usuario) => usuario.id == id)
    //const aux = usuarios[index]
    res.send(aux);
})

server.post('/usuarios', jsonParser, (req, res)=>{
    console.log(req.body)
    const newUser = req.body;
    usuarios.push(newUser)
    res.send(usuarios)
})

server.delete('/usuarios/:index', (req,res) =>{
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)
})

console.log("O serivdor está rodando");

server.listen(3000)

//fazer o 