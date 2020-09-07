const Sequelize = require("sequelize");

//conexao com o banco de dados mysql
const sequelize  = new Sequelize('cadastro','fernando','Hertz94773195',{
    host:"localhost",
    dialect:'mysql',
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}