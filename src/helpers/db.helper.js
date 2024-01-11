const { host, user, pass, db } = process.env

module.exports = {
	HOST: host,
	USER: user,
	PASSWORD: pass,
	DB: db,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}


// const mysql = require('mysql2')



// const db = mysql.createConnection({
// 	host: DB_HOST,
// 	user: DB_USERNAME,
// 	password: DB_PASSWORD,
// 	database: DB_DATABASE
// })

// db.connect().then(()=> {
// 	console.log('Database connected')
// }).catch((err)=> {
// 	console.log(err)
// 	console.log('Failed to connect to database')
// })

// module.exports = db

