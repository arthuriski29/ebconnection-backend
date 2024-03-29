const dbConfig = require('../helpers/db.helper')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: 0,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
})
module.exports = sequelize

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)
db.users = require('./users.model.js')(sequelize, Sequelize)

module.exports = db