const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    sellerName:{
        type: String,
        required: true
    },
    sellerAddress:{
        type: String,
        required: true
    },
    customerName:{
        type: String,
        required: true
    },
    customerAddress:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now
    },
    items:[
        {
        description:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        }
    }
    ],
    finalPrice:{
        type: Number,
        required: true
    },
    terms:{
        type:String,
        required:true
    },
    invoiceDescription:{
        type:String,
        required: true
    }
})
module.exports = mongoose.model('invoice',invoiceSchema)

