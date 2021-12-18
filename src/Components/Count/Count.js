import React from 'react';
import './Count.css'

const Count = () => {
    return (
        <div>
            <div class=" w-100 mx-auto text-white count-style">
                <div class="row w-100 mx-auto py-5">
                    <div class="col text-center">
                        <h3><i class="fas fa-users"></i></h3>
                        <h3 className="counter">14,857</h3>
                        <h4>Clients</h4>

                    </div>
                    <div class="col text-center">
                        <h3><i class="fas fa-file"></i></h3>
                        <h3 className="counter">538,333,913</h3>
                        <h4>Projects</h4>

                    </div>
                    <div class="col text-center">
                        <h3><i class="fas fa-eye"></i></h3>
                        <h3 className="counter">23231,332,233</h3>
                        <h4>Viewers</h4>
                    </div>
                    <div class="col text-center">
                        <h3><i class="fas fa-thumbs-up"></i></h3>
                        <h3 className="counter">4000223,032,323</h3>
                        <h4>Likes</h4>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Count;