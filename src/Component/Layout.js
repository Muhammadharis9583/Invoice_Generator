import React, { useState } from "react";
import Textfield from "./Textfield";
import TextArea from "./TextArea";
import PoductAndPrice from "./PoductAndPrice";
import FinalPrice from "./FinalPrice";
import AddProduct from "./AddProduct";
import DialogWindow from "./DialogWindow";
import CustomCard from "./CustomCard";
import { Button, Container, Row, Col ,Card} from "react-bootstrap";

export default function Layout() {
    const [sellerName, setSellerName] = useState('')
    const [sellerAddress, setSellerAddress] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [invoiceDesc, setinvoiceDesc] = useState('')
    const [termAndCon, setTermAndCon] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [show, setShow] = useState(false)
    const [productList, setProductList] = useState([
    ])
    const handleChange = (data, name) => {
        if (name == "sellerName") {
            setSellerName(data)
            console.log(sellerName)
        }
        else if (name == "sellerAddress") {
            setSellerAddress(data)
            console.log(sellerAddress)
        }
        else if (name == "customerName") {
            setCustomerName(data)
            console.log(customerName)
        }
        else if (name == "customerAddress") {
            setCustomerAddress(data)
            console.log(customerAddress)
        }
        else if (name == "invoiceDesc") {
            setinvoiceDesc(data)
            console.log(invoiceDesc)
        }
        else if (name == "termAndCon") {
            setTermAndCon(data)
            console.log(termAndCon)
        }
        else if (name == "productDesc") {
            setProductDesc(data)
            console.log(productDesc)
        }
        else if (name == "productPrice") {
            setPrice(data)
            console.log(price)
        }
    }
    const buttonHandler = () => {
        setProductList((prev) => {
            return [
                ...prev, { description: productDesc, price: parseInt(price) }
            ]
        })
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleSubmit = async () => {
        var finalPrice = 0;
        const currentProducts = productList
        currentProducts.map((items) => {
            return (
                finalPrice = items.price + finalPrice
            )
        })
        var invoice = {
            sellerName: sellerName,
            sellerAddress: sellerAddress,
            customerName: customerName,
            customerAddress: customerAddress,
            items: productList,
            finalPrice: finalPrice,
            terms: termAndCon,
            invoiceDescription: invoiceDesc
        }
        await fetch('/api/writeInvoice', {
            method: 'POST',
            body: JSON.stringify(invoice),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                setShow(true)
                setTitle('Success 🔥')
                setContent('New invoice created successfully')
                console.log('New invoice created successfully')
            }
        }).catch(err => {
            setShow(true)
            setTitle('Error 😥')
            setContent('Problem while creating invoice')
            console.log(err)
        })
    }
    return (
        <div>
            <Container>
                <Row style={{ marginTop: '1em' }}>
                
                <Col>
                <CustomCard title='Invoice Description'>
                        <TextArea
                            label='Invoice Description'
                            name='invoiceDesc'
                            val={invoiceDesc}
                            inputHandler={handleChange}
                        />
                        </CustomCard> 
                    </Col>
                    
                </Row>
                <Row style={{ marginTop: '1em' }}>
                
                <Col>
                <CustomCard title='Seller Information'>
                        <Textfield
                            customId='seller-name'
                            label="Seller's Name"
                            placeholder='Enter seller name'
                            name="sellerName"
                            val={sellerName}
                            handleChange={handleChange}
                            text="Enter the full name"
                        />
                        <Textfield
                            customId='seller-address'
                            label="Seller's Address"
                            placeholder='Enter seller address'
                            name="sellerAddress"
                            val={sellerAddress}
                            handleChange={handleChange}
                            text="Enter the full address"
                        />
                        </CustomCard>
                    </Col>
                    <Col>
                <CustomCard title='Customer Information'>
                        <Textfield
                            customId='customer-name'
                            label="Customer's Name"
                            placeholder='Enter customer name'
                            name="customerName"
                            val={customerName}
                            handleChange={handleChange}
                            text="Enter the full name"
                        />
                        <Textfield
                            customId='customer-address'
                            label="Customer's address"
                            placeholder='Enter customer address'
                            name="customerAddress"
                            val={customerAddress}
                            handleChange={handleChange}
                            text="Enter the full address"
                        />
                        </CustomCard>  
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                <Col>
                <CustomCard title='Items Purchased'>
                        <PoductAndPrice
                            productList={productList}
                        />
                        <AddProduct
                            handleChange={handleChange}
                            buttonHandler={buttonHandler}
                        />
                        </CustomCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                
                <Col>
                <CustomCard title='Final Price'>
                        <FinalPrice
                            productList={productList}
                        />
                        </CustomCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                
                <Col>
                <CustomCard title='Terms And Condition'>
                        <TextArea
                            label='Terms And Condition'
                            styles={{ marginTop: 15 }}
                            name='termAndCon'
                            val={termAndCon}
                            inputHandler={handleChange}
                        />
                        </CustomCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                <Col>
                <Card className="text-center">
                    <Card.Body>
                    <Button variant="dark" size="lg" onClick={() => handleSubmit()}>Create Invoice</Button>
                    </Card.Body>
                </Card>  
                </Col>
                </Row>
            </Container>
            <DialogWindow
                show={show}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </div>
    )
}