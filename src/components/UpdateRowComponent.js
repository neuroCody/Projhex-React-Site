import React from 'react';

function UpdateRow() {
    return(
        <div className="container mb-5">
            <div className="row row-content align-items-center">
                <div className="col order-last col-md-6 col-lg-5 col-xl-4 pb-2 mt-5">
                    <span id="hexagon4">
                        <h4 className="hexText">Update</h4>
                    </span>
                </div>
                <img className="d-none d-lg-block mt-5 mb-5 mr-5" src="/assets/images/Update-img-xxs.jpg" alt="Update Symbol"/>
                <div className="col">
                    <div className="media d-none d-md-block">
                        <div className="media-body align-self-center p-2 mt-5" id="hexPara4">
                            <p className="d-none d-md-block upPara">
                            Proirities Change as projects advance. Make sure everyone knows the next big steps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateRow;