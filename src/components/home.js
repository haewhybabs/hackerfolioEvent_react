
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
                                    <div className="csi-about-content-area">
                                        <div className="csi-heading">
                                            <h2 className="heading">Create A new Event</h2>
                                            <h3 className="subheading">Why User Interface Conference ?</h3>
                                        </div>
                                        <div className="csi-about-content">
                                            <p className="text">
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi vitae est tristique senectus et netus et malesuada placerat eleifend leo.
                                            </p>
                                            <div className="btn-area">
                                                <a className="csi-btn csi-scroll" href="#csi-registration">Resister now</a>
                                                <a className="csi-btn csi-btn-brand" href="about.html">Login</a>
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


export default Home;