import React from 'react';

function Features() {
    return(
        <div className="container">
            <div class="row">
                <div class="col">
                </div>
            </div>
            <div class="row row-content justify-content-center topBuffer1">
                <div class="col text-center">
                    <h1>Tools We Offer</h1>
                </div>
            </div>
            <div class="row row-content topBuffer" >
            <div class="col col-md-6 ">
                <h2 class="featHeader">Project Creation</h2>
                <p class="featParagraph">Use our project creator to set up necessary steps and track them through to completion. Assign specific team members to each task for organized workflow.</p>
            </div>
            <div class="col col-md-6 d-none d-sm-block">
                <img class="img-fluid" src="/assets/images/TaskWindow.png" alt="" />
            </div>
        </div>
        <hr />

        <div class="row row-content d-flex flex-row-reverse vh-85 topBuffer" >
            <div class="col col-md-4">
                <h2 class="featHeader">Bug Tracking</h2>
                <p class="featParagraph">Detailed bug tracking to maintian project fidelity.</p>
            </div>
            <div class="col col-md-8 d-none d-sm-block">
                <div id="bugCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="$bugCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="$bugCarousel" data-slide-to="1"></li>
                        <li data-target="$bugCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/assets/images/bug-tracker-Create-lg.png" alt="Creat a bug" class="d-block w-100" />
                            <div class="carousel-caption">
                                <h3>Create a Bug</h3>
                                <p class="d-none d-sm-block">Create a tracking card for any bug impacting progress.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/images/bug-tracker-Dash-lg.png" alt="Bug Tracker Dashboard" class="d-block w-100" />
                            <div class="carousel-caption">
                                <h3>Bug Dashboard</h3>
                                <p class="d-none d-sm-block">View all active bugs color-categorized by priority.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/images/bug-tracker-View-lg.png" alt="Bug Tracker Details" class="d-block w-100" />
                            <div class="carousel-caption">
                                <h3>Bug View</h3>
                                <p class="d-none d-sm-block">Get detailed information on each pending task.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#bugCarousel" role="button" data-slide="prev" >
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#bugCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="sr-only"></span>
                    </a>
                    
                </div>
            </div>
        </div>
        <hr />
        <div class="row row-content justify-content-center topBuffer">
            <div class="col-12 text-center">
                <h2 class="featHeader">Live Chat and Meeting Options</h2>
                <p class="featParagraph">Stay connected to all of your team with live chat.</p>
                
            </div>
            <div class="col col-md-8 col-lg-6 pb-2 d-none d-sm-block" id="chatHeader">
                <h4 class="text-light ml-2" ><strong>Hexcomms</strong></h4>
                <div class="card bg-light" id="card1">
                    <div class="row g-0">
                        <div class="col-md-2 mt-2">
                            <img src="/assets/images/david-hex.svg" class="ml-3 mt-2"></img>
                        </div>
                        <div class="col col-md-10">
                            <div class="card-body">
                                <div class="card-title text-fluid">David Smith <small>@ 9:45am</small></div>
                                <p class="card-text">The last update looks great! I left some notes on the next phase.</p>
                                <button class="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-light" id="card2">
                    <div class="row g-0">
                        <div class="col-md-2 mt-2">
                            <img src="/assets/images/Reelle-hex.svg" class="ml-3 mt-2"></img>
                        </div>
                        <div class="col col-md-10">
                            <div class="card-body">
                                <div class="card-title text-fluid">Reelle Mayor <small>@ 9:15am</small></div>
                                <p class="card-text">Don't forget about the meeting we have with Vince @ 12:30.</p>
                                <button class="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-light" id="card3">
                    <div class="row g-0">
                        <div class="col-md-2 mt-2">
                            <img src="/assets/images/Vincent-hex.svg" class="ml-3 mt-2"></img>
                        </div>
                        <div class="col col-md-10">
                            <div class="card-body">
                                <div class="card-title text-fluid">Vincent Law <small>@ 9:12am</small></div>
                                <p class="card-text"> Thanks for the feedback. Hoping to be done a bit earlier today...</p>
                                <button class="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-light" id="card4">
                    <div class="row g-0">
                        <div class="col-md-2 mt-2">
                            <img src="/assets/images/tobi-hex.svg" class="ml-3 mt-2"></img>
                        </div>
                        <div class="col col-md-10">
                            <div class="card-body">
                                <div class="card-title text-fluid">Tobi Adeyemi <small>@ 8:45am</small></div>
                                <p class="card-text">The UX/UI for our landing page is complete. Starting on back-end today.</p>
                                <button class="btn card-button">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 class="text-light"><small>Icons by Icon8</small></h6>
            </div>
        </div>
        <hr />
        
        <div class="row row-content topBuffer" >
            <div class="col col-md-6 ">
                <h2 class="featHeader">Syncronized Calendar Updates</h2>
                <p class="featParagraph">The Gantt Chart inspired timeline helps keep progress and upcoming deadlines in picture perfect view.</p>
            </div>
            <div class="col col-md-6 d-none d-sm-block">
                <img class="img-fluid" src="/assets/images/Timeline.png" alt="" />
            </div>
        </div>
    </div>
    );
}

export default Features;