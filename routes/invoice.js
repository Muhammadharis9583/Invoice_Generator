const express = require('express')
const router = express.Router();
const invoice = require('../models/InvoiceSchema')

router.post('/writeInvoice',(req,res)=>{
    const input = req.body;
    const newInvoice = new invoice({
        sellerName : input.sellerName,
        sellerAddress:input.sellerAddress,
        customerName:input.customerName,
        customerAddress:input.customerAddress,
        items:input.items,
        finalPrice:input.finalPrice,
        terms:input.terms,
        invoiceDescription:input.invoiceDescription
    })
    newInvoice.save((err,doc)=>{
        if(err){
            console.log(err)
            res.status(500).json({message:'Problem occur while saving the information 😥'})
        }
        else{
            console.log(doc)
            res.status(200).json({message:'Invoice created successfully ❤️‍🔥'})
        }
    })
})
router.get('/readInvoice',(req,res)=>{
    invoice.find((err,doc)=>{
        if(err){
            res.status(500).json("Problem while retriving the data")
        }
        else{
            res.status(200).json(doc)
        }
    })
})
router.get('/readInvoice/:id',(req,res)=>{
    const id = req.params.id
    invoice.findById(id,(err,doc)=>{
        if(err){
            res.status(500).json("Problem while retriving the data")
        }
        else{
            res.status(200).json(doc)
        }
    })
})
router.put('/updateInvoice/:id',(req,res)=>{
    const id = req.params.id
    const input = req.body
    invoice.findByIdAndUpdate(id,{sellerName : input.sellerName,
        sellerAddress:input.sellerAddress,
        customerName:input.customerName,
        customerAddress:input.customerAddress,
        items:input.items,
        finalPrice:input.finalPrice,
        terms:input.terms,
        invoiceDescription:input.invoiceDescription},(err,doc)=>{
            if(err){
                res.status(500).json("Problem while Updating the data")
            }
            else{
                res.status(200).json(doc)
            }
        })
})
router.delete('/deleteInvoice/:id',(req,res)=>{
    const id = req.params.id
    invoice.findByIdAndDelete(id,(err,doc)=>{
        if(err){
            res.status(500).json("Problem while removing invoice")
        }
        else{
            res.status(200).json("Invoice deleted successfully")
        }
    })
})

module.exports = router;