import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Tagline from './TaglineComponent';
import DevRow from './DevRowComponents';
import OrgRow from './OrgRowComponent';
import CollabRow from './CollabRowComponent';
import UpdateRow from './UpdateRowComponent';
import DeliverRow from './DeliverRowComponent';

class HomePage extends Component {
    render() {
        return(
            <Container fluid>
                <Tagline />
                <DevRow />
                <OrgRow />
                <CollabRow />
                <UpdateRow />
                <DeliverRow />
                <div className="row row-content">
                    <div className="col d-flex justify-content-center mt-5 mb-5">
                        <a href="/features"><button className="btn btn-lg btn-secondary">See Available Features</button></a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomePage;