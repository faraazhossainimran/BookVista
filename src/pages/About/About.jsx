import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Bookvista</title>
      </Helmet>
      <div
        className="hero md:h-[300px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/sCRpkgQ/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About us</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <div>
          <img
            src="https://i.ibb.co/2Fx3gvQ/frames-for-your-heart-z-SG-kd-L6vw-unsplash.jpg"
            className="shadow-2xl"
          />
          </div>
          <div>
            <h1 className="text-5xl font-bold mt-40 ml-20">Join With Us</h1>
            <p className="py-6 mt-2 ml-20">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="mt-6 ml-20"><Link className="btn b-0 p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold" to={'/signup'}>JOIN Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
