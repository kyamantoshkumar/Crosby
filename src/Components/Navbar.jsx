import React from "react"
import "../assets/css/style.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// <Chat socket={socket} username={username} room={room} />

 
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { faTwitter as farTwitter } from '@fortawesome/free-brand-solid-svg-icons'
const Navbar = () => {
   const myStyle = {
      fontFamily: 'Times-New-Roman',
      whiteSpace:'pre-wrap'
   }

   const myFont = {
    fontFamily: 'Times-New-Roman',
    fontSize: '40px'
 }

   const myFront = {
      width:'99.4vw',
      height:'80vh'
   }

   const myCard = {
    // bsCardBorderWidth: '0px' ,
    background:'transparent'          
   }
   
   const myFootercolor = {
    background: 'hsl(240deg 3% 23%)'
   }
   const myImgmid = {
    width:'99vw',
    height:'90vh'
   }
   const myFontStyle = {
       fontFamily:'Raleway'
   }

  return (
    <>
      <nav style={{ background: 'hsl(240deg 3% 23%)' }} className="navbar navbar-light text-light">
        <div style={{ background: 'hsl(240deg 3% 23%)' }} className="container-fluid px-4 justify-content-between">
          <a style={myStyle} className="navbar-brand text-light fs-1" href="/">Crosby</a>
          <ul className="nav  justify-content-between">
            <li className="nav-item">
              <a style={myStyle} className="nav-link active text-light fs-5" aria-current="page" href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a style={myStyle} className="nav-link text-light fs-5" href="/ourstory">Our Story</a>
            </li>
            <li className="nav-item">
              <a style={myStyle} className="nav-link text-light fs-5" href="/journal">Journal</a>
            </li>
            <li className="nav-item">
              <a style={myStyle} className="nav-link text-light fs-5" href="/contact">Contact</a>
            </li>
          </ul>
          <div>
            <InstagramIcon className="mt-2 mx-3 text-light" />
            <FacebookOutlinedIcon className="mt-2 mx-3 text-light" />
            <TwitterIcon className="mt-2 mx-3 text-light" />
            <ShoppingCartIcon className="mt-2 mx-3 text-light" />
          </div>
        </div>

      </nav>
      {/* start a header page */}
      <section>
        <div className="row">
          <div className="col-md-12 col-sm-12 text-light">
            <div className="div">
              <div className="w-100">

                <img style={myFront} src={require("../assets/images/FrontPage.jpg")} alt="" />
                <div className="centered text-center mx-auto">
                  <p style={myFont} className="fs-1">Plants and Pots <br /> For Your Home</p>
                  <button style={myStyle} className=" px-5 py-3 fs-5 text-shadow text-dark opacity-25 border border-light ">Shop Now</button>
                </div>
              </div>
              <div className="text-center">
                <h3 style={myStyle} className="fs-1 text-center my-5">Fan Favorite</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-around mx-2 px-4">
                  <div className="col">
                    <div style={myCard} className="card h-80 bg-none">
                      <img src={require("../assets/images/Pencil Plant1.jpg")} className="card-img-top" alt="..." />
                      <div style={myFootercolor} className="card-body border-none">
                        <p style={myStyle} className="card-title text-light text-center fs-1">Lil' Guys</p>
                        <button style={myStyle} className=" px-5 py-4 fs-5 text-  opacity-50 border border-light">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div style={myCard} className="card h-80">
                      <img src={require("../assets/images/Alcoasia1.jpg")} className="card-img-top" alt="..." />
                      <div style={myFootercolor} className="card-body">
                        <p style={myStyle} className="card-title text-light text-center fs-1">Bigger Statements</p>
                        <button style={myStyle} className=" px-5 py-4 fs-5 text-shadow text-dark opacity-50 border- border-light">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div style={myCard} className="card h-80 border-black">
                      <img src={require("../assets/images/Lily1.jpg")} className="card-img-top" alt="..." />
                      <div style={myFootercolor} className="card-body">
                        <p style={myStyle} className="card-title text-light text-center fs-1">Low Maintenance</p>
                        <button style={myStyle} className=" px-5 py-4 fs-5 text-shadow text-dark opacity-50 border- border-light" placeholder="buy Now">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <img style={myImgmid} className="pb-5" src={require("../assets/images/FrontPageMid.jpg")} alt="" />
                <div>
                  <p style={myFontStyle} className="fs-1 text-center my-4 pb-5">The Journal</p>
                </div>

              </div>
              <div className="row row-cols-1 row-cols-md-2 g-4 px-5 mx-3" >
                <div className="col" style={{background:'white-hsl(0,0%,100%)'}}>
                  <div className="card bg-transparent">
                    <img src={require("../assets/images/Orchid Rotate.gif")} className="card-img-top" alt=".." />
                    <div className="card-body">
                      <h5 style={myStyle} className="card-title bg-none">Card title</h5>
                      <p style={myStyle} className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
                <div className="col" style={{background:'white-hsl(0,0%,100%)'}}>
                  <div className="card bg-transparent">
                    <img src={require("../assets/images/Snake Rotate.gif")} className="card-img-top" alt=".." />
                    <div className="card-body">
                      <h5 style={myStyle} className="card-title">Card title</h5>
                      <p style={myStyle} className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Navbar


// npm i --save@ fortawesome/free-brand-solid-svg-icons
// npm i --save@ fortawesome/free-solid-svg-icons
// npm install --save@ fortawesome/react-fontawesome
// Modal using bootstrap



























/*
<nav classname="navbar navbar-expand-lg navbar-light ">
  <div classname="container-fluid">
    <a  style={myStyle} classname="navbar-brand fs-1" href="/">Crosby</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="/">Link</a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classname="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classname="dropdown-item" href="/">Action</a></li>
            <li><a classname="dropdown-item" href="/">Another action</a></li>
            <li><hr classname="dropdown-divider"/></li>
            <li><a classname="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classname="d-flex">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/

