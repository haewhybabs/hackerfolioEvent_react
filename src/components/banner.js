
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {

        
        return (

            <section>
                <div className="csi-banner">
                    <div className="csi-banner-style">
                        <div className="csi-inner">
                            <div className="container">
                                <div className="csi-banner-content">
                                    <h3 className="csi-subtitle">HackerFolio</h3>
                                    <h2 className="csi-title">Event Center</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Banner;