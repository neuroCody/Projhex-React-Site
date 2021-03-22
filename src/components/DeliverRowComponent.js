import React from 'react';

function DeliverRow() {
    return(
        <div className="container mb-5">
            <div className="row row-content align-items-center">
                <div className="col-6 col-lg-4 pb-5 mt-5">
                    <span id="hexagon5">
                        <h4 className="hexText">Deliver</h4>
                    </span>
                </div>
                <img className="d-none d-md-block mt-5" src="/assets/images/Growth-chart-sm.jpg" alt="Growth Chart"/>
                <div className="col col-lg-5">
                    <div className="media d-none d-md-block">
                        <div className="media-body align-self-center mt-5" id="hexPara5">
                            <p className="d-none d-md-block delPara">
                            Meet and exceed client expectations by cutting out busy work, redundant meetings and wasted hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliverRow;