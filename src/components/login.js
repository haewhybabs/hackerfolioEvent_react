
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {

        
        return (

            <section>
                <div id="csi-about" className="csi-about">
                    <div className="csi-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="csi-about-img">
                                        <img src="assets/img/about.png" alt="about"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <form method="POST" className="csi-contactform">
                                        <div className="form-group">
                                            <input type="email" name="csiemail" className="form-control csiemail" id="csiemail" placeholder="Enter Email address ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control csisubject" id="csisubject" placeholder="Enter Your Password" required />
                                        </div>
                                        
                                        <button type="submit" name="submit" value="contact-form" className="csi-btn hvr-glow hvr-radial-out csisend csi-send">Login</button>
                                    </form>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Login;