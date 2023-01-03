import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
    const myImg = {
        width: '99.5vw',
        rightAlignment:'100px',
        height: '55vh'
    }
    const myStyle = {
        fontFamily: 'Times-New-Roman',
    }
    return(
        <> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="containerText">
                    <div  className=" text-start">
                       <img style={myImg} src={require("../assets/images/OurStory.jpg")} alt="Snow"  />
                        <div className="centered text-center mx-auto">
                             <p style={myStyle} className="fs-1" >Contact US</p>
                             <p style={myStyle} className="fs-4" >The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet nullam.</p>
                             <button className="lightbox-handle sqs-system-button sqs-editable-button sqs-button-element--primary" id="yui_3_17_2_1_1670906158694_217" tabIndex="0">Get in Touch
  </button>
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
        </>
    )
}
export default Contact