import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../assets/css/ourstory.css"

const Ourstory = () => {
    const myImg = {
        width: '99.4vw',
        height: '55vh'
    }
    const myStyle = {
        fontFamily: 'Times-New-Roman',
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row text-light">
                   
                    <div  className="containerText text-auto">
                       <img style={myImg} src={require("../assets/images/OurStory.jpg")} alt="Snow"  />
                        <div>
                             <h1 style={myStyle} className="centered text-center mx-auto" >Our Story </h1></div>
                   </div>

                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-8 col-sm-12">
                        <div className="col-md-12 col-sm-12">
                            <p style={myStyle} className="text-center fs-1">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                            </p>

                            <div className="card bg-dark mb-3">
                                <img src={require("../assets/images/Our Chat1.jpg")} className="card-img-top" alt="..." />
                            </div>
                            <div style={myStyle} className="card-body">

                                {/* <h5  className="card-title">Card title</h5> */}
                                <p className="card-text fs-3 text-break">Sed ut perspiciatis unde omnis iste natus error<br/> sit voluptatem accusantium doloremque<br/> laudantium, totam rem aperiam,</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */} 
                                {/* <div class="burger-inner header-menu-icon-doubleLineHamburger">
        <div class="top-bun"></div>
        <div class="patty"></div>
        <div class="bottom-bun"></div>
      </div> */}
                            </div>
                              <div className="col-md-12 col-sm-12 row">
                                <div className="col-md-3 col-sm-12"> </div>
                                <div className="col-md-8 col-sm-12">
                                <div >
                               
                               <p style={myStyle} className="mx-4 fs-4 mt-4">
                               The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo, accumsan auctor orci lectus ac ipsum. Proin porta nisl sem, ac suscipit lorem dignissim et. Curabitur euismod nec augue vitae dictum. Nam mattis, massa quis consequat molestie, erat justo vulputate tortor, a sollicitudin turpis felis eget risus. Aliquam viverra urna felis, eu ornare enim consectetur sed. Morbi vitae ultrices velit. Sed molestie consectetur metus. Proin neque eros, dapibus ac accumsansodales sit.
                                  <br/>
                                  <br/>
                                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                               </p>
                              </div>
                                </div>
                                </div> 
                              
                        </div>
                     </div>
                  </div>
                <div className="col-md-2 col-sm-12"></div>
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
                <div className="col-md-1 col-sm-12"></div>
            </div>
        </>
    )
}
export default Ourstory

 /* <div>
                        <img style={myImg} src={require("../assets/images/OurStory.jpg")} alt="" />
                        <div className=" ">
                            <h1 style={myStyle} className=" text-center fs-1 mx-auto my-center  card-img-over">Our Story</h1>
                        </div>
                    </div> */

/* <div className="col-md-12 col-sm-12 text-light">
             <div>
                    <img style={myImg} src={require("../assets/images/OurStory.jpg")} alt="" /> 
                    <div className=" ">
                        <h1 style={myStyle} className=" text-center fs-1 mx-auto my-center  card-img-over">Our Story</h1>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-12"></div>
                  <div className="col-md-8 col-sm-12">
                    <div className="col-md-12 col-sm-12">
                    <p style={myStyle} className="text-center fs-1">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                    </div>

                    <div class="card bg-dark text-white">
  <img src={require("../assets/images/Our Chat1.jpg")} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center ">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
                  </div>
                 <div className="col-md-2 col-sm-12"></div>
             </div> */