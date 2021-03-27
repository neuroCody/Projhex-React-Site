import React, { Component } from 'react';
import Tagline from './TaglineComponent';
import DevRow from './DevRowComponents';
import OrgRow from './OrgRowComponent';
import CollabRow from './CollabRowComponent';
import UpdateRow from './UpdateRowComponent';
import DeliverRow from './DeliverRowComponent';

class HomePage extends Component {
    render() {
        return(
            <React.Fragment>
                <Tagline />
                <DevRow />
                <OrgRow />
                <CollabRow />
                <UpdateRow />
                <DeliverRow />
                <div class="row row-content">
                    <div class="col d-flex justify-content-center mt-5 mb-5">
                        <a href="/features"><button class="btn btn-lg btn-secondary">See Available Features</button></a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;