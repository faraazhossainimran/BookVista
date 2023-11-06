import React from "react";

const NewsLetter = () => {
  return (
    <div className="">
      <div
        className="hero py-4"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Sign Up to Our NewsLetter</h1>
            <input type="email" className="input" placeholder="Write you email"></input>
            <button className="b-0 p-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold ml-2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
