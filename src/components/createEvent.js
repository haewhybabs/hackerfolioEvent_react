
import React, { Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiUrl} from '../config';
class CreateEvent extends Component {
    constructor(props) {
    super(props)
        this.state={
            info:
            {
               eventName:'',
               venue:'',
               type:'',
               info:''
            },
            listRedirect:false,
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
        const user = JSON.parse(localStorage.getItem('user'))
        this.showLoading();
        

        const proxyurl = "https://cors-anywhere.herokuapp.com/";      
        fetch( proxyurl + apiUrl+'event/create',{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':user.token
            },
                body: JSON.stringify({
                
                    type:state.type,
                    venue:state.venue,
                    info:state.info,
                    eventName:state.eventName,
                
            })    
        })
        .then(response => {
                                    
            return response.json();   
                
        })
        .then((contents)=>{
            console.log(contents)
            if(contents.status){ 
                this.notify("Success!!!");
                
            }
            this.hideLoading();

            this.setState({
                listRedirect:true
            })

        })
        .catch((error)=>{
            this.hideLoading();
            console.log(error)
        })
       


    }


    render() {

        if (this.state.listRedirect) {
            return <Redirect push to="/event-list" />;
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
                                            <input type="text" name="eventName" className="form-control csiemail" onChange={(e)=>this.handleChange(e)} placeholder="Enter Event Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="venue" className="form-control csiemail" onChange={(e)=>this.handleChange(e)} placeholder="Enter Venue" required/>
                                        </div>
                                        <div className="form-group">
                                            <select name="type" className="form-control" onChange={(e)=>this.handleChange(e)}>
                                                <option>Select Option</option>
                                                <option value="0">Offline</option>
                                                <option value="1">Online</option>
                                            </select>
                                        </div>


                                        <div className="form-group">
                                            <textarea className="form-control csimessage" name="info" rows="5" onChange={(e)=>this.handleChange(e)} placeholder="Event Info ..." required></textarea>
                                        </div>
                                        
                                        <button type="submit" name="submit" value="contact-form" onChange={(e)=>this.handleChange(e)} className="csi-btn hvr-glow hvr-radial-out csisend csi-send">Submit</button>
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


export default CreateEvent;