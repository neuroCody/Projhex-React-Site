import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col col-sm-5 text-center">
                    <a class="btn btn-social-icon" href="http://facebook.com" target="_blank" rel="noopener noopen"><i class="fa fa-facebook socialIcon"></i></a>
                    <a class="btn btn-social-icon" href="http://twitter.com/" target="_blank" rel="noopener noopen"><i class="fa fa-twitter socialIcon"></i></a>
                    <a class="btn btn-social-icon" href="http://reddit.com" target="_blank" rel="noopener noopen"><i class="fa fa-reddit-alien socialIcon"></i></a>
                    <a class="btn btn-social-icon" href="http://linkedin.com" target="_blank" rel="noopener noopen"><i class="fa fa-linkedin socialIcon"></i></a>
                </div>
                <div class="col col-sm-5 text-center">
                    <a class="btn btn-link btn-lg text-white float-right" href="mailto: support@projhex.net"><i class="fa fa-envelope"></i>Email us</a>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default Footer;