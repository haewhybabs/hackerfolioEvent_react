
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
                                                        <p style="font-size:24px; color:#931976; padding-top:15px;">HackerFolio Event</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="collapse navbar-collapse">
                                                <ul className="nav navbar-nav csi-nav">
                                                    <li><a className="csi-scroll" href="#csi-about">Home</a></li>
                                                    <li><a className="csi-scroll" href="#csi-schedule">Register</a></li>
                                                    <li><a className="csi-scroll" href="#csi-speakers">Login</a></li>                                          
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