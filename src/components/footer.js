
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {

        
        return (

            <footer>
                <div id="csi-footer" className="csi-footer">
                    <div className="csi-inner-bg">
                        <div className="csi-inner">
                            <div className="csi-footer-middle">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="csi-footer-logo">
                                                <a className="logo" href="#"><img src="assets/img/logo.png" alt="Logo" /></a>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-8">
                                            <div className="csi-footer-single-area">
                                                <div className="csi-footer-single">
                                                    <h3 className="footer-title">Venue Location </h3>
                                                    <h4 className="date">
                                                        18 - 21 December, 2019
                                                    </h4>
                                                    <address>
                                                        51 Francis Street, Darlinghurst
                                                        NSW 2010, United States
                                                    </address>
                                                    <a className="map-link" href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> View Map location</a>
                                                </div>
                                                <div className="csi-footer-single">
                                                    <h3 className="footer-title">Social Connection</h3>
                                                    <p className="text">
                                                        You should connect social area  for Any update
                                                    </p>
                                                    <ul className="list-inline csi-social">
                                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="csi-subscriber">
                                                <h3 className="footer-title">Subscribe & Stay Updated</h3>
                                                <form className="subscribe-form csi-subscribe-form" >
                                                    <div className="form-group form-group-email">
                                                        <input type="email" id="subscribe" placeholder="Ex: themearth@gmail.com" className="form-control csi-input-form form-control"  />
                                                    </div>
                                                    <div className="form-group form-group-submit">
                                                        <button type="submit" name="csi-submit" id="csi-submit" className="csi-btn csi-submit"><span>Subscribe</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="csi-copyright">
                                                <p className="text">Designed By Ayobami Babalola</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        );
    }
}


export default Footer;