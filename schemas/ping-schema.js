const { Schema, model } = require("mongoose");
const schema = new Schema({
	User: String,
	Ping: String,
})
module.exports = model("Ping", schema);