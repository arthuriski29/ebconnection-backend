const jwt = require('jsonwebtoken')
const {APP_SECRET} = process.env


const authMiddleware = (req, res, next) =>{
	try{
		const {authorization: auth} = req.headers
		if(!auth && 
      !auth?.startsWith('Bearer ')){
			throw Error('unauthorized')
		}
		const token = auth.slice(7)
		// const token = auth
		console.log(token)
		req.user = jwt.verify(token, APP_SECRET)
		return next()
	}catch(err){
		return res.json({
			success: false,
			message: `Error occured: ${err}`
		})
	}
}

module.exports = authMiddleware
