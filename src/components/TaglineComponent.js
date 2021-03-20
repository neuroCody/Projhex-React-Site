import React from 'react';

function Tagline() {
    return(
        <div className="container mt-5">
            <div className="row row-content align-items-center pb-5">
                <div className="col-sm-6 text-center col-md-6 pt-4">
                    <h2 id="tagline">Project Tracking Available Anywere.</h2>
                    <p className="d-none d-sm-block" id="tagParagraph">
                    In a world where remote work is becoming more necessary, keep your team in the loop on important tasks
                    </p>
                </div>
                <div className="col-6 d-none d-md-block">
                    <div className="media">
                        <img className="img-fluid" src="/assets/images/pexels-christina-morillo-118123-md.jpg" alt="Remote Worker" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tagline;