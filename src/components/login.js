
import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

    constructor(props) {
    super(props)
        this.state={
            info:
            {
                email:'',
                password:'',
            },
            loginRedirect:false
        }
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            info: {
                ...this.state.info,
                [name]: value
            }
        });
    }


    render() {

        
        return (

            <section>
                <ToastContainer />
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
                                    <form method="POST" className="csi-contactform" onSubmit={()=>this.handleSubmit()}>
                                        <div className="form-group">
                                            <input type="email" name="csiemail" className="form-control csiemail" onChange={(e)=>this.handleChange(e)} id="csiemail" placeholder="Enter Email address ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control csisubject" onChange={(e)=>this.handleChange(e)} id="csisubject" placeholder="Enter Your Password" required />
                                        </div>
                                        
                                        <button type="submit" name="submit" value="contact-form" onChange={(e)=>this.handleChange(e)} className="csi-btn hvr-glow hvr-radial-out csisend csi-send">Login</button>
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