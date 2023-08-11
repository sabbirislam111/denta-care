import React from 'react';
import heroImage from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';


const Hero = () => {
  return (
    <div className="hero py-32" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-lg rounded-lg shadow-2xl" alt=''/>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;




