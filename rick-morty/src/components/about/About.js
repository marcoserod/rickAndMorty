import React from 'react';

function About(props) {
    return (
        <section className="container">
            <div className="card mb-3">
                <div className="row no-gutters ">
                    <div className="col-md-4">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE3zjE9_vYFmA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=i9YqJaRlA_1nc0w0df2fVOySbGpZXP3XbwvyiBsl1ys" className="card-img col-lg pic" alt="ss"/>
                    </div>
                    <div className="col-md-8 ">
                    <div className="card-body">
                        <h5 className="card-title">Hi! I'm Marcos!</h5>
                        <p className="card-text">I'm a Business Analyst who is on the pursuit of becoming a web developer</p>
                        <p className="card-text"><small class="text-muted">Thanks for visiting my app</small></p>
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
  }

  export default About;