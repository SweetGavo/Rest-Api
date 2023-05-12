const mongoose = require('mongoose')
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
      type:Date
  }
})

