import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
    return(
        <Navbar dark color="primary">
            <div className="container">
                
                <NavbarBrand href="/"><img src="/assets/images/Logo.svg" alt="Projhex Logo" />Projhex</NavbarBrand>
            </div>
        </Navbar>
    );
}

export default Header;