import React from 'react';

function Features() {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
            </div>
            <div className="row row-content justify-content-center topBuffer1">
                <div className="col text-center">
                    <h1>Tools We Offer</h1>
                </div>
            </div>
            <div className="row row-content topBuffer" >
            <div className="col col-md-6 ">
                <h2 className="featHeader">Project Creation</h2>
                <p className="featParagraph">Use our project creator to set up necessary steps and track them through to completion. Assign specific team members to each task for organized workflow.</p>
            </div>
            <div className="col col-md-6 d-none d-sm-block">
                <img className="img-fluid" src="/assets/images/TaskWindow.png" alt="" />
            </div>
        </div>
        <hr />

        <div className="row row-content d-flex flex-row-reverse vh-85 topBuffer" >
            <div className="col col-md-4">
                <h2 className="featHeader">Bug Tracking</h2>
                <p className="featParagraph">Detailed bug tracking to maintian project fidelity.</p>
            </div>
            <div className="col col-md-8 d-none d-sm-block">
                <div id="bugCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="$bugCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="$bugCarousel" data-slide-to="1"></li>
                        <li data-target="$bugCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/images/bug-tracker-Create-lg.png" alt="Creat a bug" className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>Create a Bug</h3>
                                <p className="d-none d-sm-block">Create a tracking card for any bug impacting progress.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/bug-tracker-Dash-lg.png" alt="Bug Tracker Dashboard" className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>Bug Dashboard</h3>
                                <p className="d-none d-sm-block">View all active bugs color-categorized by priority.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/bug-tracker-View-lg.png" alt="Bug Tracker Details" className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>Bug View</h3>
                                <p className="d-none d-sm-block">Get detailed information on each pending task.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#bugCarousel" role="button" data-slide="prev" >
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#bugCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only"></span>
                    </a>
                    
                </div>
            </div>
        </div>
        <hr />
        <div className="row row-content justify-content-center topBuffer">
            <div className="col-12 text-center">
                <h2 className="featHeader">Live Chat and Meeting Options</h2>
                <p className="featParagraph">Stay connected to all of your team with live chat.</p>
                
            </div>
            <div className="col col-md-8 col-lg-6 pb-2 d-none d-sm-block" id="chatHeader">
                <h4 className="text-light ml-2" ><strong>Hexcomms</strong></h4>
                <div className="card bg-light" id="card1">
                    <div className="row g-0">
                        <div className="col-md-2 mt-2">
                            <img src="/assets/images/david-hex.svg" className="ml-3 mt-2"></img>
                        </div>
                        <div className="col col-md-10">
                            <div className="card-body">
                                <div className="card-title text-fluid">David Smith <small>@ 9:45am</small></div>
                                <p className="card-text">The last update looks great! I left some notes on the next phase.</p>
                                <button className="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-light" id="card2">
                    <div className="row g-0">
                        <div className="col-md-2 mt-2">
                            <img src="/assets/images/Reelle-hex.svg" className="ml-3 mt-2"></img>
                        </div>
                        <div className="col col-md-10">
                            <div className="card-body">
                                <div className="card-title text-fluid">Reelle Mayor <small>@ 9:15am</small></div>
                                <p className="card-text">Don't forget about the meeting we have with Vince @ 12:30.</p>
                                <button className="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-light" id="card3">
                    <div className="row g-0">
                        <div className="col-md-2 mt-2">
                            <img src="/assets/images/Vincent-hex.svg" className="ml-3 mt-2"></img>
                        </div>
                        <div className="col col-md-10">
                            <div className="card-body">
                                <div className="card-title text-fluid">Vincent Law <small>@ 9:12am</small></div>
                                <p className="card-text"> Thanks for the feedback. Hoping to be done a bit earlier today...</p>
                                <button className="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-light" id="card4">
                    <div className="row g-0">
                        <div className="col-md-2 mt-2">
                            <img src="/assets/images/tobi-hex.svg" className="ml-3 mt-2"></img>
                        </div>
                        <div className="col col-md-10">
                            <div className="card-body">
                                <div className="card-title text-fluid">Tobi Adeyemi <small>@ 8:45am</small></div>
                                <p className="card-text">The UX/UI for our landing page is complete. Starting on back-end today.</p>
                                <button className="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-light"><small>Icons by Icon8</small></h6>
            </div>
        </div>
        <hr />
        
        <div className="row row-content topBuffer" >
            <div className="col col-md-6 ">
                <h2 className="featHeader">Syncronized Calendar Updates</h2>
                <p className="featParagraph">The Gantt Chart inspired timeline helps keep progress and upcoming deadlines in picture perfect view.</p>
            </div>
            <div className="col col-md-6 d-none d-sm-block">
                <img className="img-fluid" src="/assets/images/Timeline.png" alt="" />
            </div>
        </div>
    </div>
    );
}

export default Features;