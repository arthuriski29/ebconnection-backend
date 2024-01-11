// const db = require('../models')
const usersModel = require('../models/query/users.query.model')
const {APP_SECRET} = process.env
const jwt = require('jsonwebtoken')
// const Op = db.Sequelize.Op

exports.login = async (req, res) => {
	try {
		const {username, password} = req.body
		const user = await usersModel.findOne(username)
		console.log(user)
		if(!user){
			throw Error('wrong_credentials')
		}
		const verify = await verify(user.password, password)
		if(!verify){
			throw Error('wrong_credentials')
		}
		const token = jwt.sign({id: user.id}, APP_SECRET)
		return res.json({
			success: true,
			message: 'Login success!',
			results: {token}
		})
	} catch (err) {
		// return res.json({
		// 	success: false,
		// 	message: `Error Occured: ${err}`,
		// })
		console.log(err)
	}
}

exports.createUser = async (req, res) => {
	try {
		const { username, password } = req.body

		const newUser = await usersModel.create({
			name: username,
			password: password
		})

		return res.status(201).json({ 
			success: true,
			message: 'User created successfully', 
			results: newUser.toJSON() })
	} catch (error) {
		console.error('Error creating user:', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}

}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
}