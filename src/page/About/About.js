import React from 'react';
import FirstSlide from '../../Components/FirstSlide/FirstSlide';
import SecondSlide from '../../Components/SecondSlide/SecondSlide';
import ThirdSlide from '../../Components/ThirdSlide/ThirdSlide';

const About = () => {
    return (
        <div>
            <div className="text-center">
                <h1><span className="span-style my-3 text-primary">About</span> us</h1>
                <div className="card mb-3  w-75 about-style mx-auto">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://wallpaperaccess.com/full/1393281.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="">
                                    <h5 className="span-style text-primary">We Providing all service for any destination</h5>
                                    <p className="card-text">Explore World With us</p>

                                    <p><i className="fas fa-phone-square-alt"></i> +01932455656</p>
                                    <p><i className="fas fa-hospital-user"></i> Open Hours: 10 am - 6pm</p>
                                    <p><i className="fas fa-hospital-user"></i>Address: Mogbazzer , Rode No:43/2 ,Dhaka Bangladesh </p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="m-5 w-75 mx-auto">
                        <div className="bg-dark text-white w-100 mx-auto rounded-3">
                            <h5 className="text-white">Working Progress</h5>
                            <div className="p-3">
                                <div className="progress w-50 mx-auto">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">89%</div>
                                </div>
                                <h5 className="text-white">Team work</h5>
                                <div className="progress w-50 mx-auto">
                                    <div className="progress-bar bg-warning " role="progressbar" style={{ width: "75%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                                <h5 className="text-white">Client</h5>
                                <div className="progress w-50 mx-auto">
                                    <div className="progress-bar bg-success " role="progressbar" style={{ width: "65%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                                <h5 className="text-white">Event Management</h5>
                                <div className="progress w-50 mx-auto">
                                    <div className="progress-bar bg-primary " role="progressbar" style={{ width: "92%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">92%</div>
                                </div>
                                <h5 className="text-white">Security system</h5>
                                <div className="progress w-50 mx-auto">
                                    <div className="progress-bar bar-style  " role="progressbar" style={{ width: "73%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">73%</div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>
                <div className="summary">
                    <div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
                        <div className="carousel-indicators button-color">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active  indicator-style" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active  indicator-style" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active  indicator-style" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <FirstSlide></FirstSlide>
                            </div>
                            <div className="carousel-item">
                                <SecondSlide></SecondSlide>
                            </div>
                            <div className="carousel-item">
                                <ThirdSlide></ThirdSlide>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>





            </div>



        </div>


    );
};

export default About;