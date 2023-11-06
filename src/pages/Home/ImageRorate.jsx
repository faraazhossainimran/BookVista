import { Link } from "react-router-dom";

const ImageRorate = () => {
  return (
    <div className="" data-aos="zoom-in-right" data-aos-duration="900">
      <div className="lg:w-[full] md:h-[900px] carousel-vertical rounded-box">
        <div className="carousel-item">
          <img
            className="relative"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-[100px] left-[100px] items-center ">
            <a className="text-3xl mr-4 p-6 px-12 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold">
              <Link to={"/login"}>View More</Link>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </div>
  );
};

export default ImageRorate;
