
import React, { Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiUrl} from '../config';
class AdminEvent extends Component {

    constructor(props) {
    super(props)
        this.state={
            
            homeRedirect:false,
            showLoading:false,
            data:[],
            isLoading:true,
        }
    }

    eventAction = (statusType,eventId) =>
    {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log("yser");

        this.showLoading();
        

        const proxyurl = "https://cors-anywhere.herokuapp.com/";      
        fetch( proxyurl + apiUrl+'event/admin-action',{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':user.token
            },
            body: JSON.stringify({
                
                statusType,
                eventId         
            })    
                
        })
        .then(response => {
                                    
            return response.json();   
                
        })
        .then((contents)=>{
            console.log(contents)

            this.notify("Success!!!");
            this.hideLoading();

        })
        .catch((error)=>{
            this.hideLoading();
            console.log(error)
        })
    }
    showLoading = ()=>{
        this.setState({
            isLoading:true
        })
    }

    hideLoading = ()=>{
        this.setState({
            isLoading:false
        })
    }

    notify = (error) =>{
        toast(error);
    }

    componentDidMount()
    {
    
        const user = JSON.parse(localStorage.getItem('user'))

        if(!user){
            this.setState({
                homeRedirect:true
            })
        }
        this.showLoading();
        

        const proxyurl = "https://cors-anywhere.herokuapp.com/";      
        fetch( proxyurl + apiUrl+'event/admin-event-list',{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':user.token
            },
                
        })
        .then(response => {
                                    
            return response.json();   
                
        })
        .then((contents)=>{
            console.log(contents)

            this.setState({
                data:contents.data,
                isLoading:false
            })
            this.hideLoading();

        })
        .catch((error)=>{
            this.hideLoading();
            console.log(error)
        })
    }
    render() {
        
        if (this.state.homeRedirect) {
            return <Redirect push to="/" />
        }

        return (

            <section>

            <ToastContainer />
                <div id="csi-schedule">
                {this.state.isLoading ?  
                    <div class="lds-hourglass">Loading...</div>
                
                    :null
                }
                    <div className="csi-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                        
                                    <div className="tab-content csi-tab-content">
                                        <div id="home" className="tab-pane fade in active">

                                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                                {this.state.data.map((row,index)=>(
                                                
                                                <div className="panel panel-default csi-panel" key={row._id}>
                                                    <div className="panel-heading" role="tab" id="headingTwo">
                                                        <div className="panel-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                <div className="csi-single-schedule">
                                                                    
                                                                    <div className="schedule-info">
                                                                        
                                                                        <h3 className="title">{row.eventName}</h3>
                                                                        <h4 className="author-info">venue:<span>{row.venue}</span>{row.createdAt}</h4>
                                                                        <p>{row.info}</p>
                                                                        {row.type==0 ? 
                                                                            <p>Offline</p>
                                                                            :
                                                                            <p>Online</p>
                                                                        }
                                                                        
                                                                        <button className="btn btn-danger" onClick={()=>this.eventAction(3,row._id)}>Reject</button>
                                                                        
                                                                        <button className="btn btn-success" onClick={()=>this.eventAction(1,row._id)}>Approved</button>
                                                                      
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}
                                            
                                             </div>

                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                    
                </div>
            </section>
        );
    }
}


export default AdminEvent;