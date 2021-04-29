import React from 'react';

function CollabRow() {
    return(
        <div className="container mt-5">
            <div className="row row-content align-items-center">
                <div className="col">
                    <span id="hexagon3">
                        <h6 className="hexText2">Collaborate</h6>
                    </span>
                </div>
                <div className="col">
                    <div className="media d-none d-md-block">
                        <img className="d-none d-lg-block" src="/assets/images/Virtual-communication-concept-sm-100.jpg" alt="Virtual Communication"/>
                        <div className="media-body align-self-center" id="hexPara3">
                            <p className="d-none d-md-block collPara mt-2">
                            Stay connected with important contacts. Give and receive feedback in real time, anywhere you have internet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollabRow;