import React,{useEffect,useState} from "react";
import { Card, Row, Col ,Container } from "react-bootstrap";
import PoductAndPrice from "./PoductAndPrice";
import ButtonToAll from "./ButtonToAll";

export default function InvoiceLayout(props){
    const [info, setInfo] = useState([])
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const GetData = async() =>{
            const res = await fetch('/api/readInvoice/'+props.id,{method:'GET'})
            const jsonRes = await res.json()
               if(res.ok){
                setInfo(jsonRes)
               }  
           }
           GetData()
    }
    ,[])
    useEffect(()=>{
            setProducts(info.items)
    },[info])

    return(
        <div className="container-fluid bg-secondary p-5">
        <Card bg="dark" text="white">
            <Card.Header as={'h3'} className="text-center">
                Sales Invoice
            </Card.Header>
            <Card.Body>
                <Container style={{fontSize: '1.3em'}}>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'right', color:'white'}}>
                            <h5>Seller's name and address</h5>
                            <p>{info.sellerName}<br/>{info.sellerAddress}</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'left', color:'white'}}>
                            <h5>Customer's name and address</h5>
                            <p>{info.customerName}<br/>{info.customerAddress}</p>
                        </Col>
                        <Col style={{textAlign:'right', color:'white'}}>
                            <h5>Invoice id and date</h5>
                            <p>{info._id}<br/>{new Date(info.Date).toLocaleString()}</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'left', color:'white'}}>
                            <h5>Invoice Description</h5>
                            <p>{info.invoiceDescription}</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'left', color:'white'}}>
                            <h5>items/Services Purchased</h5>
                            {products == undefined?
                                <Row>
                                    <Col>Description</Col>
                                    <Col>Price</Col>
                                </Row>
                                :
                                <PoductAndPrice
                            productList={products}
                        />
                            }  
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'left', color:'white'}}>
                            <h5>Final Price</h5>
                            <p>${info.finalPrice}</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <Col style={{textAlign:'left', color:'white'}}>
                            <h5>Terms and Conditiions</h5>
                            <p>{info.terms}</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1.2em'}}>
                        <ButtonToAll/>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
            
        </div>
    )
}