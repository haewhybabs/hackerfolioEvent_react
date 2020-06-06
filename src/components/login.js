
import React, { Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiUrl} from '../config';

class Login extends Component {

    constructor(props) {
    super(props)
        this.state={
            info:
            {
                email:'',
                password:'',
            },
            homeRedirect:false,
            showLoading:false
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

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            info: {
                ...this.state.info,
                [name]: value
            }
        });
    }

    
    handleSubmit=(e)=>{
        
        e.preventDefault();
        
        
        var state=this.state.info;
        console.log(state)
        
        this.showLoading();

        const proxyurl = "https://cors-anywhere.herokuapp.com/";      
        fetch( proxyurl + apiUrl+'user/login',{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                
                email: state.email,
                password: state.password,
                
            })    
        })
        .then(response => {
                                    
            return response.json();   
                
        })
        .then((contents)=>{
            console.log(contents)
            if(contents.status){ 
                this.notify("Success!!!");
                var data={
                    isLoggedIn:true,
                    token:contents.token,
                    user:contents.data
                }
                localStorage.setItem('user', JSON.stringify(data));

                this.setState({
                    homeRedirect:true
                })
                
            }
            else{
                this.notify("Invalid Email or Password")
            }
            this.hideLoading();

        })
        .catch((error)=>{
            this.hideLoading();
            console.log(error)
        })
       


    }



    render() {

        
        if (this.state.homeRedirect) {
            return <Redirect push to="/" />;
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
                                            <input type="email" name="email" className="form-control csiemail" onChange={(e)=>this.handleChange(e)} id="csiemail" placeholder="Enter Email address ..." required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control csisubject" onChange={(e)=>this.handleChange(e)} id="csisubject" placeholder="Enter Your Password" required />
                                        </div>
                                        
                                        <button type="submit" name="submit" value="contact-form" onChange={(e)=>this.handleChange(e)} className="csi-btn hvr-glow hvr-radial-out csisend csi-send">Login</button>
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


export default Login;