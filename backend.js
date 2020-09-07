const express = require("express");
const app = express();
const Cadastro = require("./models/cadastro");
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")

app.use(express.static(__dirname + "/views"))

/*Configuraçoes do handlebars*/
app.engine('handlebars', handlebars({defaultLayout: "main"}))
app.set("view engine", 'handlebars')


/*Configuraçoes do bodyparser*/
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


/*rota onde fica o formulario*/
app.get("/cad",(req,res)=>{
   
    res.render("index")
})

app.post("/form", (req,res)=>{
    Cadastro.create({
        Nome: req.body.Nome,
        Sobrenome:req.body.Sobrenome,
        Email: req.body.Email,
        Senha: req.body.Senha,
        Cpf: req.body.Cpf,
        Telefone: req.body.Tele,
        Sexo: req.body.radsex

    }).then(()=>{
        res.redirect("/cad")
    }).catch((erro)=>{
        res.send("Houve um erro: "+ erro)
    })
})
const PORT = process.env.PORT || 8089
app.listen(PORT, function(){
    console.log("Servidor rodando na porta 8081")
})




