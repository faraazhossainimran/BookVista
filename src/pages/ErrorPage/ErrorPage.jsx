import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import NavBar from "../../shared/NavBar/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        
        <img className="w-[600px] mx-auto" src="https://i.ibb.co/6YZb523/5203299.jpg"/>
        <h1 className="text-xl text-center py-4 my-6">Back to the Home <Link className="b-0 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold" to={'/'}> Home </Link></h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
