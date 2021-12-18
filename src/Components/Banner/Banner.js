import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-style">
            <div id="carouselExampleFade" class="carousel slide carousel-fade m-5   w-100 mx-auto " data-bs-ride="carousel ">
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src="https://t3.ftcdn.net/jpg/02/68/30/88/240_F_268308858_PjbDd9pMPhID9zTK0bbfeUX8UoiEQaRf.jpg" class="d-block w-100  display-style" alt="..." />
                    </div>
                    <div class="carousel-item  ">
                        <img src="https://t3.ftcdn.net/jpg/02/98/06/66/240_F_298066617_t48ATt1fHat4IYm4kvCQyy8d15NnK473.jpg" class="d-block w-100 display-style" alt="..." />
                    </div>
                    <div class="carousel-item ">
                        <img src="https://t3.ftcdn.net/jpg/01/19/49/36/240_F_119493628_eujtF3y5CzXXUmLSBqte9ZHtadiPEo2j.jpg" class="d-block w-100 display-style" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Banner;