const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const dailyTixSchema = mongoose.Schema({
    userId: reqString
}, {
    timestamps: true
})

module.exports = mongoose.model('daily-tix', dailyTixSchema)