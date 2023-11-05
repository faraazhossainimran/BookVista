import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md " data-aos="fade-up" data-aos-duration="3000">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <button className="btn btn-primary">View Rooms</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
