const mongoose = require('mongoose')
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subscriberToChannel: {
        type: String
        require: true
    }

})
