import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Textfield from "./Textfield";
import TextArea from "./TextArea";
import CustomCard from "./CustomCard";
import PoductAndPrice from "./PoductAndPrice";
import FinalPrice from "./FinalPrice";
import AddProduct from "./AddProduct";
import DialogWindow from "./DialogWindow";
import { Container, Row, Col ,Button,ButtonGroup} from "react-bootstrap";
import ButtonToAll from "./ButtonToAll";

export default function InvoiceUpdate(props) {
    const [info, setInfo] = useState([])
    const [sellerName, setSellerName] = useState('')
    const [sellerAddress, setSellerAddress] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [final, setFinal] = useState('')
    const [invoiceDesc, setinvoiceDesc] = useState('')
    const [termAndCon, setTermAndCon] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productList, setProductList] = useState([])
    const [price, setPrice] = useState(0)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [show, setShow] = useState(false)
    useEffect(() => {
        const GetData = async () => {
            const res = await fetch('/api/readInvoice/' + props.id, { method: 'GET' })
            const jsonRes = await res.json()
            if (res.ok) {
                setInfo(jsonRes)
            }
        }
        GetData()
    }
        , [])
    useEffect(() => {
        console.log(info)
        setSellerName(info.sellerName)
        setSellerAddress(info.sellerAddress)
        setCustomerName(info.customerName)
        setCustomerAddress(info.customerAddress)
        setinvoiceDesc(info.invoiceDescription)
        setFinal(info.finalPrice)
        setProductList(info.items)
        setTermAndCon(info.terms)
    }, [info])
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
    const handleSubmit = async () => {
        var invoice = {
            sellerName: sellerName,
            sellerAddress: sellerAddress,
            customerName: customerName,
            customerAddress: customerAddress,
            items: productList,
            finalPrice: final,
            terms: termAndCon,
            invoiceDescription: invoiceDesc
        }
        await fetch('/api/updateInvoice/'+props.id, {
            method: 'PUT',
            body: JSON.stringify(invoice),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                setShow(true)
                setTitle('Success 🔥')
                setContent('Invoice updated successfully')
            }
        }).catch(err => {
            setShow(true)
            setTitle('Error 😥')
            setContent('Problem while updaing invoice')
            console.log(err)
        })
    }
    const handleClose = () => {
        setShow(false)
    }
    return (
        <div className="container-fluid bg-secondary p-5">
            <Card bg="dark" text="white">
                <Card.Header as='h3' style={{ textAlign: 'center' }}>Update Invoice</Card.Header>
                <Card.Body style={{ color: 'black' }}>
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
                                    {productList == undefined ?
                                        <PoductAndPrice
                                            productList={[{ description: " ", price: 0 }]}
                                        />
                                        : <PoductAndPrice
                                            productList={productList}
                                        />
                                    }
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
                                    {productList == undefined ?
                                        <FinalPrice
                                            productList={[{ description: " ", price: 0 }]}
                                        />
                                        :
                                        <FinalPrice
                                            productList={productList}
                                        />

                                    }

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
                    <ButtonGroup>
                    <Button variant="dark" size="lg" onClick={() => handleSubmit()}>Update Invoice</Button>
                    <ButtonToAll/>
                    </ButtonGroup>
                    </Card.Body>
                </Card>  
                </Col>
                </Row>
                    </Container>
                </Card.Body>
            </Card>
            <DialogWindow
                show={show}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </div>
    )
}