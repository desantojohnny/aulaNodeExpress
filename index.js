const express = require('express');
const { append } = require('express/lib/response');

const server  = express()

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

console.log("O serivdor está rodando");

server.listen(3000)

