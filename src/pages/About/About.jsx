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
        <div className="grid md:grid-cols-2">
          <div>
            <img
              src="https://i.ibb.co/2Fx3gvQ/frames-for-your-heart-z-SG-kd-L6vw-unsplash.jpg"
              className="shadow-2xl"
            />
          </div>
          <div className="m-2">
            <h1 className="text-5xl font-bold md:mt-10 md:ml-20">Who we are</h1>
            <p className="py-6 mt-2 md:ml-20 md:leading-9">
              At BookVista, we are passionate about connecting travelers with
              their perfect accommodations, creating unforgettable experiences,
              and fostering a seamless journey from booking to check-out. As a
              leading hotel booking company, we understand the significance of
              finding the ideal place to stay,<br></br> and we strive to make this
              process effortless and enjoyable for our customers. Our dedicated
              team at BookVista works tirelessly to curate an extensive
              collection of handpicked hotels, resorts, and lodges, ensuring
              that every preference and budget is catered to. With a
              user-friendly platform and advanced search filters, we empower our
              users to discover, compare, and book accommodations with ease,
              allowing them to focus on what truly matters - making memories and
              enjoying their travels.<br></br> Committed to excellence, we prioritize
              customer satisfaction above all else, offering 24/7 support and
              personalized assistance to guarantee a smooth and hassle-free
              booking experience. Our mission is to inspire wanderlust and
              facilitate seamless travel arrangements.
            </p>
            <button className="md:mt-4 mb-2 md:ml-20">
              <Link
                className="btn b-0 p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold"
                to={"/signup"}
              >
                JOIN Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
