import React from 'react';


// function FwRow(props) {
//     return(
//         <div classNameName="row row-content">
//             <div classNameName="col-6 col-lg-4">
//                 <span id="hexagon1">
//                     <h4 classNameName="hexText">{props.title}</h4>
//                 </span>
//             </div>
//             <img classNameNameName="d-none d-md-block" src={props.img} alt={props.title} />
//             <div classNameName="col">
//                 <div classNameName="media d-none d-md-block">
//                     <div classNameName="media-body align-self-center p-2"  id="hexPara1">
//                         <p classNameName="d-none d-md-block" id="devPara">
//                         {props.text}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

function DevRow() {
    return(
        <div className="container mt-5 mb-5">
            <div className="row row-content">
                <div className="col-6 col-lg-4 ml-4">
                    <span id="hexagon1">
                        <h4 className="hexText">Develop</h4>
                    </span>
                </div>
                <img className="d-none d-md-block mr-2" src="/assets/images/idea-vector-background-xs.jpg" id="devPic" alt="Idea" />
                <div className="col mt-5">
                    <div className="media d-none d-md-block">
                        <div className="media-body align-self-center p-2"  id="hexPara1">
                            <p className="d-none d-md-block devPara" id="">
                            Providing a space for creativity to grow and mature. Giving you the tools to transform Ideas into reality.
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DevRow;