import React from 'react';

const SecondSlide = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-2 w-100 mx-auto">
                <div className="col">
                    <div className="card info-img">
                        <img src="https://media.istockphoto.com/vectors/hacker-attacking-server-or-database-network-security-database-secure-vector-id1185236506?k=20&m=1185236506&s=612x612&w=0&h=rQ1H82WaG28Hjqjb_RLYNrewKOk5y8vsvU6nMi3wY1s=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Denial-of-Service (DOS) Attack</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card info-img">
                        <img src="https://www.educba.com/academy/wp-content/uploads/2020/10/SQL-Injection-Attack.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SQL Injection</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card info-img">
                        <img src="https://documents.trendmicro.com/images/TEx/articles/security-101-zero-day-vulnerabilities-and-exploits-cover.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Zero-day Exploit</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SecondSlide;