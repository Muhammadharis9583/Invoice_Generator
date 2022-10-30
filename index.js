const express = require('express')
const path = require('path');
const app = express()
const invoice = require('./routes/invoice')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://mhking:mhking1666@nicknames.08znp.mongodb.net/invoiceStorage?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
mongoose.connection.on('error',(err)=>{
    console.log("Error"+err)
})
mongoose.connection.once('open',()=>{
    console.log('Alhumdolillah Working Fine')
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'build')))
app.use('/api',invoice)
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/invoice.html'))
})
app.listen(3000,()=>{
    console.log('Server listening to port 3000')
})