require('dotenv').config()
const Sequelize = require('sequelize')
const models = require('./models')

const config = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
}

//console.log({config})

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
})
connection.authenticate()


const nflTeams = models(connection, Sequelize)


nflTeams.findAll({}).then((teams) => {
    console.log({teams})
})

//console.log({ connection }) 