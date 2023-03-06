import React from "react";

import { BrowserRouter, Router, Route } from "react-router-dom";
import Assignment1 from "./Components/Pages/Assignment";

const Appn = () => {
    return(
        <>
         <BrowserRouter>
           <Assignment1 />
           <Router>
             {/*  <Route path="/assignment" element={<Assignment1 />} />  */}
           </Router>
         </BrowserRouter>
        </>
    )
}
export default Appn