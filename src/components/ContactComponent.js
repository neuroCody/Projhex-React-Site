import React from 'react';


function Contact() {
    return(
        <div>
            <div class="row row-content justify-content-center">
            <div class="col-12 text-center">
                <h1>Let us know what you think!</h1>
                <hr />
            </div>
            <div class="col">
                <form>
                    <div class="form-group row justify-content-center">
                        <label for="firstName" class="col-md-2 col-form-label"><strong>First Name</strong></label>
                        <div class="col-md-7">
                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="form-group row justify-content-center">
                        <label for="lastName" class="col-md-2 col-form-label"><strong>Last Name</strong></label>
                        <div class="col-md-7 justify-content-center">
                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="form-group row justify-content-center">
                        <label for="areaCode" class="col-md-2 col-form-label"><strong>Phone Number</strong></label>
                        <div class="col-4 col-md-3">
                            <input type="tel" class="form-control" id="areaCode" name="areaCode" placeholder="Area Code" />
                        </div>
                        <div class="col-8 col-md-4">
                            <input type="tel" class="form-control" name="telNum" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div class="form-group row justify-content-center">
                        <label for="comments" class="col-md-2 col-form-label"><strong>Comments</strong></label>
                        <div class="col-md-7">
                            <textarea class="form-control" name="comments" id="comments" rows="8"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-md-4 col-md-9">
                            <button type="submit" class="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
        </div>

        <div class="row row-content align-items-center">
            <div class="offset-md-2 col-sm-6">
                <h4>Company Address</h4>
                <address>
                    Projhex Holdings<br />
                    47 Projhex Plaza<br />
                    Denver, CO 80123
                </address>
            </div>
            <div class="col">
                <a role="button" class="btn btn-link" href="tel:+13035556789"><i class="fa fa-phone"></i>1-303-555-6789</a><br />
                <a role="button" class="btn btn-link" href="mailto:support@projhex.net"><i class="fa fa-envelope"></i>support@projhex.net </a>
            </div>
        </div>
        </div>
    );
}



export default Contact;