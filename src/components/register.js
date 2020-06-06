
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {


    handleSubmit=(e)=>{
        e.preventDefault();
    }

    nameChange=()=>{

    }

    emailChange=()=>{

    }

    passwordChange=()=>{

    }

    passwordConfirmationChange=()=>{

    }

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
                                    <form method="POST" className="csi-contactform" onSubmit={(e)=>this.handleSubmit(e)}>
                                        <div className="form-group">
                                            <input type="text" name="fullName" className="form-control csiname" onChange={(fullName)=>this.setState({fullName})} placeholder="Enter Full Name ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control csiemail" onChange={(email)=>this.setState({email})} placeholder="Enter Email address ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control csisubject" onChange={(password)=>this.setState({password})} placeholder="Enter Your Password" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password_confirmation" name="password" className="form-control password_confirmation" onChange={(passwordConfirmation)=>this.setState({passwordConfirmation})} placeholder="Confirm Your Password" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phoneNumber" className="form-control csiname" onChange={(phoneNumber)=>this.setState({phoneNumber})} placeholder="Enter Full PhoneNumber ..." required/>
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


export default Register;