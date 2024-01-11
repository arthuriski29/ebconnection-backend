// const db = require('../index')

const { sequelize } = require('..')

const table = 'users'

exports.findOne = async function(username) {
	const query = `
  SELECT
    u.id,
    u.username
  FROM ${table} u
  WHERE u.username = '${username}'
  `
	const values = [username]
	const {rows} = await sequelize.query(query, values)
	return rows
}