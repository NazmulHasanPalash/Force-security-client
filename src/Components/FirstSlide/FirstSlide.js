import React from 'react';
import './FirstSlide.css';

const FirstSlide = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-2 w-100 mx-auto">
                <div className="col">
                    <div className="card info-img">
                        <img src="https://images.news18.com/ibnlive/uploads/2021/04/1617448016_android-system-update-malware-fakesysupdate.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Malware</h5>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card info-img">
                        <img src="https://media.istockphoto.com/photos/button-on-computer-keyboard-picture-id1146311388?k=20&m=1146311388&s=612x612&w=0&h=bbXNddDo1q1uveGi987JUBcOAgd3bZ6bduxJbHZdmmo=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Phishing</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card info-img">
                        <img src="https://resources.appsealing.com/4-svc/wp-content/uploads/2021/07/16122721/mitm-attacks.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MitM Attacks</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FirstSlide;