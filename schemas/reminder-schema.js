const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const reminderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    content: reqString,
    User: reqString
})

const name = 'reminderSchema'

module.exports = mongoose.model[name] || mongoose.model(name, reminderSchema)