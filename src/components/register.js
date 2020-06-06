
import React, { Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import {apiUrl} from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Register extends Component {

    
    constructor(props) {
    super(props)
        this.state={
            info:
            {
                fullName:'',
                email:'',
                password:'',
                passwordConfirmation:'',
                phoneNumber:'',
                showLoading:false,

            },
            loginRedirect:false
        }
    }

    showLoading = ()=>{
        this.setState({
            showLoading:true
        })
    }

    hideLoading = ()=>{
        this.setState({
            showLoading:false
        })
    }

    notify = (error) =>{
        toast(error);
    }

    


    handleSubmit=(e)=>{
        
        e.preventDefault();
        
        
        var state=this.state.info;
        console.log(state);
        if(state.password !=state.passwordConfirmation){
            this.notify("Password does not match");
        }
        else{
            this.showLoading();

            const proxyurl = "https://cors-anywhere.herokuapp.com/";      
            fetch( proxyurl + apiUrl+'user/registration',{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                    
                    email: state.email,
                    password: state.password,
                    password_confirmation:state.passwordConfirmation,
                    fullName:state.fullName,
                    phoneNumber:state.phoneNumber
                    
                })
                
                
            })
            .then(response => {
                 
                                
                return response.json();   
                  
            })
            .then((contents)=>{
                console.log(contents)
                if(contents.status){
                    
                    this.setState({
                        loginRedirect:true
                    })
                    this.notify("Success!!!");

                    var data={
                        isLoggedIn:true,
                        token:contents.token,
                        user:contents.data
                    }

                    localStorage.setItem('user', data);
                }
                else{
                    this.notify(contents.errors[0].msg)
                }
                this.hideLoading();
    
            })
            .catch((error)=>{
                this.hideLoading();
                console.log(error)
            })
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

        if (this.state.loginRedirect) {
            return <Redirect push to="/login" />;
        }

        
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
                                    <form method="POST" className="csi-contactform" onSubmit={(e)=>this.handleSubmit(e)}>
                                        <div className="form-group">
                                            <input type="text" name="fullName" value={this.state.info.fullName} className="form-control csiname" onChange={(e)=>this.handleChange(e)} placeholder="Enter Full Name ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email"  value={this.state.info.email} className="form-control csiemail" onChange={(e)=>this.handleChange(e)} placeholder="Enter Email address ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password"  value={this.state.info.password} className="form-control csisubject" onChange={(e)=>this.handleChange(e)} placeholder="Enter Your Password" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password"   value={this.state.info.passwordConfirmation} name="passwordConfirmation" className="form-control password_confirmation" onChange={(e)=>this.handleChange(e)} placeholder="Confirm Your Password" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phoneNumber"  value={this.state.info.phoneNumber} className="form-control csiname" onChange={(e)=>this.handleChange(e)} placeholder="Enter Full PhoneNumber ..." required/>
                                        </div>
                                        <button type="submit" name="submit" value="contact-form" className="csi-btn hvr-glow hvr-radial-out csisend csi-send">Login</button>
                                        {this.state.showLoading ?  
                                            <div class="lds-hourglass">Loading...</div>
                                        
                                            :null
                                        }
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