import React from 'react';

function CollabRow() {
    return(
        <div className="container mt-5">
            <div className="row row-content align-items-center">
                <div className="col pb-2">
                    <span id="hexagon3">
                        <h4 className="hexText">Collaborate</h4>
                    </span>
                </div>
                <div className="col">
                    <div className="media d-none d-md-block">
                        <img className="d-none d-lg-block" src="/assets/images/Virtual-communication-concept-sm-100.jpg" alt="Virtual Communication"/>
                        <div className="media-body align-self-center p-2" id="hexPara3">
                            <p className="d-none d-md-block" id="collPara">
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