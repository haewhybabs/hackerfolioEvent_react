
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
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
                                                <ul className="nav navbar-nav csi-nav">
                                                    <li><Link to ="/" className="csi-scroll">Home</Link></li>
                                                    <li><Link to ="/register" className="csi-scroll">Register</Link></li>
                                                    <li><Link to ="/login" className="csi-scroll">Login</Link></li>                                          
                                                </ul>
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