import React from "react"
import "../assets/css/style.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { faTwitter as farTwitter } from '@fortawesome/free-brand-solid-svg-icons'
const Navbar = () => {
   const myStyle = {
      fontFamily: 'Times-New-Roman',
   }
  return (
    <>
      <nav style={{ background: 'hsl(240deg 3% 23%)' }} className="navbar navbar-light text-light">
        <div style={{ background: 'hsl(240deg 3% 23%)' }} className="container-fluid px-4 justify-content-between">
          <a style={myStyle} className="navbar-brand text-light fs-1" href="/">Crosby</a>
            <ul className="nav  justify-content-between">
              <li className="nav-item">
                <a style={myStyle} className="nav-link active text-light fs-5" aria-current="page" href="/">Shop</a>
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

    </>
  )
}
export default Navbar


// npm i --save@ fortawesome/free-brand-solid-svg-icons
// npm i --save@ fortawesome/free-solid-svg-icons
// npm install --save@ fortawesome/react-fontawesome


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

