
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
    super(props)
        this.state={
            user:props.user
        }
    }

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({
                user:user
            })
        }
            
            
    }

    logout = () =>{
        localStorage.clear('user');
        this.setState({
            user:false,
        })
        window.location.reload(false)
    }


    render() {

        
        return (

        <div>
            <header>
                <div id="csi-header" className="csi-header csi-banner-header">
                    <div className="csi-header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <nav className="navbar navbar-default csi-navbar">
                                        <div className="csicontainer">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                        data-target=".navbar-collapse">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                                <div className="csi-logo">
                                                    <a href="index.html">
                                                        <p>HackerFolio Event</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="collapse navbar-collapse">
                                                {this.state.user ? 
                                                        <ul className="nav navbar-nav csi-nav">
                                                             
                                                            <li><Link to ="/" className="csi-scroll">Welcome, {this.state.user.user.fullName}</Link></li>        
                                                            <li><Link to ="/create-event" className="csi-scroll">Create Event</Link></li>
                                                            <li><Link to ="/event-list" className="csi-scroll">Events</Link></li>
                                                            <li><Link to ="/" className="csi-scroll" onClick={()=>this.logout()}>Logout</Link></li>
                                                        </ul>
                                                    :
                                                        <ul className="nav navbar-nav csi-nav">
                                                            <li><Link to ="/" className="csi-scroll">Home</Link></li>
                                                            <li><Link to ="/register" className="csi-scroll">Register</Link></li>
                                                            <li><Link to ="/login" className="csi-scroll">Login</Link></li> 
                                                        </ul>
                                                    }
                                                   
                                                                                             
                                                
                                            </div>
                                        
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                
                </div>
            </header>
        </div>
        );
    }
}


export default Header;