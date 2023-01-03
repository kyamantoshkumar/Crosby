import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Shop = () => {
    const myStyle = {
        fontFamily: 'Times-New-Roman',
     }

    const myCard = {
        // bsCardBorderWidth: '0px' ,
        background:'transparent'          
       }

       const myWeight = {
        fontFamily: 'Times-New-Roman',
       }

       const myFootercolor = {
        background: 'hsl(240deg 3% 23%)'
       }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-light">
            <div className="text-center text-light mt-4">
              <h2 style={myWeight} className="mt-4 fs-1" >Our Plants</h2>
              <p style={myStyle} className="text-center fs-3 pb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis, velit laborum unde quia ab dolorem qui, eveniet fugiat quo cupiditate, facere animi blanditiis ducimus deleniti alias accusamus inventore porro?  </p>
            </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div style={myCard} className="card h-80 bg-none">
                  <img src={require("../assets/images/Lily1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body border-none">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Lily</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $20.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Pencil Plant1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Pencil Plant</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $12.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80 border-black">
                  <img src={require("../assets/images/Alcoasia1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Alcoasia</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $15.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Snake1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Snake</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $12.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-90">
                  <img src={require("../assets/images/Orchid1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Orchid</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $30.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Pink Calathea1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Pink Calathea</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $30.00</p>
                     {/* <p className="text-center"><small style={myStyle} className="text-muted fs-5">SALE</small></p> */}
                  </div>
                 
                </div>
              </div> 
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Maiden Hair1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Maiden Hair</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $10.00</p>
                  </div>
                </div>
              </div> 
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Cactus1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Cactus</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $30.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80 bs-card-border-width-0">
                  <img src={require("../assets/images/Fern1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Fern</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $25.00</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-80">
                  <img src={require("../assets/images/Palm1.jpg")} className="card-img-top" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Palm</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $20.00</p>
                  </div>
                 
                </div>
              </div>
              <div className="col">
                <div style={myCard} className="card h-100">
                  <img style={{height:"40vh"}} src={require("../assets/images/giftcard-template.jpg")} className="card-img-top h-100" alt="..." />
                  <div style={myFootercolor} className="card-body">
                    <h5 style={myStyle} className="card-title text-light text-center fs-4">Giftcard- Template</h5>
                    <p style={myStyle} className="card-text text-light text-center fs-5">from $25.00</p>
                  </div>
                  {/* <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div> */}
                </div>
              </div>
            </div>

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

          <div className="col-md-12 col-sm-12 text-start">
          <div>
            <h4 style={myStyle} className="mt-4">Made with <u className="text-muted">Squarespace</u></h4>
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
export default Shop