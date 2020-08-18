import React from 'react';
import myPic from '../../assets/myPic.jpg';

function About(props) {
    return (
        <section 
        className="container-fluid d-flex justify-content-center">

            <div className="card col-md-9 d-flex ">
                <div className="row ">
                    <div className="col-md-3">
                        <img 
                        style={{
                            transform: "rotate(15deg)"
                        }}
                        src={myPic}
                        className="card-img rounded-circle m-auto" 
                        alt="Marcos's picture"/>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">Hi! I'm Marcos!</h5>
                        <p className="card-text">A Business Analyst who is on the pursuit of becoming a front-end web developer</p>
                        <p className="card-text"><small className="text-muted">Thanks for visiting my app</small></p>
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
  }

  export default About;