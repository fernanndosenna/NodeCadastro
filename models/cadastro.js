const db = require ("./db")

const Cadastro = db.sequelize.define("usuario",{
    Nome:{
        type:db.Sequelize.STRING   
    },
    Sobrenome:{
        type:db.Sequelize.STRING
    },
    Email:{
        type:db.Sequelize.STRING
    },
    Senha:{
        type:db.Sequelize.STRING
    },
    Cpf:{
        type:db.Sequelize.STRING
    },
    Telefone:{
        type:db.Sequelize.STRING
    },
    Sexo:{
        type:db.Sequelize.STRING
    }

})

//Cadastro.sync({force:true})

module.exports = Cadastro