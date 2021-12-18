import React from 'react';

const ThirdSlide = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 my-2 w-100 mx-auto">
                <div class="col">
                    <div class="card info-img">
                        <img src="https://www.ilantus.com/wp-content/uploads/2020/03/3-Major-Password-Attacks-%E2%80%93-What-Should-You-Know-and-Do-.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Password Attack</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card info-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKYdhvvGu1_ztdkcRV3Z599dYU8-7hFBZLACVRJCQqYs4QR6TQGYJI3FlobYDO4QfHg&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cross-site Scripting</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card info-img">
                        <img src="https://www.passwordrevelator.net/blog/wp-content/uploads/2019/08/definition-rootkit.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rootkits</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ThirdSlide;