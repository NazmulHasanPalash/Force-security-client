import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Banner from '../Banner/Banner';
import './SecondBanner.css'

const SecondBanner = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
    }, [count]);
    return (
        <div className="second-style">
            <div class="container w-100 mx-auto  ">
                <div class="row  align-items-center">
                    <div class=" col-lg-6 col-sm-12 col-md-6">
                        <div className="text-white">
                            <div className="m-5 body-dtyle">
                                <h5 className="card-title tag-style">CYBER SECURITY AND SERVER CENTER</h5>
                                <h1 className="card-title">FORCE-Security</h1>
                                <h3>working for
                                    {count ? (
                                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                                            <span className="span-style"> Secure your Data</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style"> Protection from cyber Threats</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style"> Encrypted data analysis</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style"> Cyber protection</span>
                                        </Typist>
                                    ) : (
                                        ""
                                    )}
                                </h3>
                                <button className="btn  btn-style my-3  contact-style"><a className="mx-5" href="#contact">Contact
                                </a></button>

                            </div>


                        </div>
                    </div>
                    <div class=" col-lg-6 col-sm-12 col-md-6">
                        <Banner></Banner>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SecondBanner;