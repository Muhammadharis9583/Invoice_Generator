import React,{useState,useEffect} from "react";
import InvoiceTable from "./InvoicesTable";
import DialogWindow from "./DialogWindow";

export default function InvoicesLayout(){
    var[check,setCheck]=useState(true)
    var[info,setInfo]= useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [show, setShow] = useState(false)
    
    useEffect(()=>{
        const GetData = async() =>{
            const res = await fetch('/api/readInvoice',{method:'GET'})
            const jsonRes = await res.json()
               var invoicesInfo = []
               jsonRes.map((invoice)=>{
                   invoicesInfo.push({
                       id: invoice._id,
                       description: invoice.invoiceDescription
                   })
               })
               if(res.ok){
                setInfo(invoicesInfo)
               }  
   
           }
           GetData()
    }
    ,[])
    useEffect(()=>{
            console.log(info)
    },[info])
    const handleDelete = async(id) =>{
        await fetch('/api/deleteInvoice/'+id, {
            method:"DELETE"
        }).then((res)=>{
            if(res.ok){
                let copy = info;
                copy = copy.filter(item=>item.id!=id)
                setInfo(copy)
                console.log(info)
               setShow(true)
                setTitle('Deleted 🔥')
                setContent('Invoice deleted successfully')
                console.log("Deleted Succesfully!!!")
            }
            else{
                setShow(true)
                setTitle('Error 😥')
                setContent('Problem while deleteing invoice')
                console.log("Problem occurs while deleting")
            }
        })
    }
    const handleClose = () => {
        setShow(false)
    }
    return(
        <div>
        <InvoiceTable 
            invoicesData = {info}
            handleDelete = {handleDelete}
        />
        <DialogWindow
                show={show}
                title={title}
                content={content}
                handleClose={handleClose}
            />
            </div>
    )
}