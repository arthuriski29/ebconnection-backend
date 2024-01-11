module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('users', {
		id: {
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.DataTypes.STRING(64),
			allowNull: false,
			validate: {
				is: /^[0-9a-f]{64}$/i
			}
		}
	}, {
		tableName: 'users',
		timestamps: true // Set to true if you want Sequelize to handle createdAt and updatedAt automatically
	})

	return Users
}