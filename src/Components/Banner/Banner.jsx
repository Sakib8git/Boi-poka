import React from "react";
import bookImg from "../../assets/boi.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-00 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bookImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="*"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
