import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const Journal = () => {
    const myCard = {
        // bsCardBorderWidth: '0px' ,
        background:'transparent'          
       }
       const myFootercolor = {
        background: 'hsl(240deg 3% 23%)'
       }
       const myStyle = {
        fontFamily: 'Times-New-Roman',
     }
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1 col-sm-12"> 1 of 1 </div>
                <div className="col-md-10 col-sm-12 my-4">
                 <div className="col-md-12 col-sm-12 shadow text-light">
                 <div className="row row-cols-1 row-cols-md-2 g-6">
  <div className="col">
    <div style={myCard} className="card">
      <img src={require("../assets/images/Orchid Rotate.gif")} className="card-img-top" alt="..." /> 
      <div style={myFootercolor}  className="card-body">
        <h5 style={myStyle} className="card-title fs-2 text-center">6/6/19</h5>
        <p style={myStyle} className="card-text fs-1 text-center ">Is It Flowers You're After?</p>
        <p style={myStyle} className="card-text text-center text-muted"><u>Read More</u></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div style={myCard} className="card">
      <img src={require("../assets/images/Snake Rotate.gif")} className="card-img-top" alt="..." /> 
      <div style={myFootercolor} className="card-body">
        <h5 style={myStyle} className="card-title fs-2 text-center">6/3/19</h5>
        <p style={myStyle} className="card-text fs-1 text-center">Searching for Succulents?</p>
        <p style={myStyle} className="card-text text-center text-muted"><u>Read More</u></p>
      </div>
    </div>
  </div>
 
</div>
                 </div>
                 </div>
                 <div className="row text-light">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-10 col-sm-12 ">
                    <div className="col-md-12 col-sm-12">
                    <div className=" d-flex justify-content-between mt-5">
            <h1 style={myStyle} className="">Crosby</h1>
            <div className="col-md-3 col-sm-12">
               <div className=" justify-content-between">
                <div className="d-flex justify-content-between">
                <u className="text-muted">
                <h5 style={myStyle}>Shop</h5> 
                </u>
               <u className="text-muted">
               <h5 style={myStyle}>Journal</h5>
               </u>
                </div>
               </div>
               <div className="d-flex justify-content-between">
                 <u className="text-muted">
                 <h5 style={myStyle}>Our Story</h5>
                 </u>
                  <u className="text-muted">
                  <h5 style={myStyle}>Contact</h5>
                  </u>
               </div>
            </div>
          </div>
                    </div>
                    <div>
            <h4 style={myStyle} className="mt-4">Made with <u className="text-muted text-start">Squarespace</u></h4>
          </div>
          <div className="my-4 ">
          <InstagramIcon className="" />
          <FacebookOutlinedIcon className="mx-4" />
          <TwitterIcon className=" mx-2" />
          </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Journal