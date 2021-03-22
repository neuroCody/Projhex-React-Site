import React from 'react'

function OrgRow() {
    return(
        <div className="container mb-5">
            <div className="row row-content align-items-center">
                <div className="col order-last col-md-6 col-lg-5 col-xl-4 mt-5">
                    <span id="hexagon2">
                        <h4 className="hexText ">Organize</h4>
                    </span>
                </div>
                <img className="d-none d-lg-block mt-5" src="/assets/images/puzzle-planet-xs.png" alt="planet" />
                <div className="col mt-5">
                    <div className="media d-none d-md-block ">
                        <div className="media-body p-2" id="hexPara2">
                            <p className="d-none d-md-block orgPara">
                            Maintain a high level of Focus within each project. Arrange your thoughts into a clear vision of the big picture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrgRow;