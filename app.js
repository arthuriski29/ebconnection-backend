require('dotenv').config({
	path: '.env',
})

const express = require('express')
// const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//

const db = require('./src/models/index')
db.sequelize.sync()
	.then(() => {
		console.log('Synced db.')
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err.message)
	})

//
app.use('/', require('./src/routers/index'))

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
} )