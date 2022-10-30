import React from "react";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CreateInvoice from "./CreateInvoice";
import UpadteInvoice from "./UpdateInvoice";
import DisplayInvoice from "./DisplayInvoice";
import AllInvoice from "./AllInvoice";
import Error from "./Error";
import HomePage from "./HomePage";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/createInvoice" element={<CreateInvoice/>} />
                <Route path="/updateInvoice/:id" element={<UpadteInvoice/>} />
                <Route path="/displayInvoice/:id" element={<DisplayInvoice/>} />
                <Route path="/allInvoice" element={<AllInvoice/>} />
                <Route  element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}