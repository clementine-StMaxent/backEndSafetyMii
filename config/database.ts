// require("dotenv").config()

// console.error(process.env.DB_USER)
module.exports = {
	HOST: "db",
	USER: "Clemstm.",
	PORT: 3306,

	PASSWORD: "userSchema",

	DB: "SafetyMii",
	dialect: "mongoose",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
}
