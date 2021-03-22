import React from 'react';

function Footer(props) {
    return(
        <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col col-sm-5 text-center">
                    <a className="btn btn-social-icon" href="http://facebook.com" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-facebook socialIcon"></i></a>
                    <a className="btn btn-social-icon" href="http://twitter.com/" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-twitter socialIcon"></i></a>
                    <a className="btn btn-social-icon" href="http://reddit.com" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-reddit-alien socialIcon"></i></a>
                    <a className="btn btn-social-icon" href="http://linkedin.com" target="_blank" rel="noreferrer noopener noopen"><i className="fa fa-linkedin socialIcon"></i></a>
                </div>
                <div className="col col-sm-5 text-center">
                    <a className="btn btn-link btn-lg text-white float-right" href="mailto: support@projhex.net"><i className="fa fa-envelope"></i>Email us</a>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default Footer;