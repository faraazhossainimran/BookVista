import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="bg-black ">
      <footer className="footer p-10 text-base-content grid md:grid-cols-4 gap-6 container mx-auto">
        <aside className="mr-12">
          <p className="text-white">
            <p className="text-3xl font-bold"><Link to={'/'}>BookVista</Link></p>
            <br />
            Welcome to our booking website, where you can easily book all of your travel needs in one place. We offer a comprehensive selection of flights, hotels, and rental cars to help you plan the perfect trip.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Legal</header>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
