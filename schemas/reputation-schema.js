const { Schema, model } = require("mongoose");
const schema = new Schema({
	User: String,
	Reputation: Number,
	Penguins: Number,
})
module.exports = model("reputation", schema);