module.exports = {
	HOST: "db",
	USER: "clemstm",
	PORT: process.env.PORT || 3310,
	PASSWORD: process.env.SERVER || "userSchema",
	DB: "SafetyMii",
	dialect: "mongosse",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
}
