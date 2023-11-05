import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {login} = useContext(AuthContext)
    const handleLoginIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    }}>
      <div className="card glass my-16">
        <div className="hero-content w-[400px] flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white-200">Login now!</h1>
          </div>
          <div className="card w-full shadow-2xl">
            <form onSubmit={handleLoginIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input bg-slate-50"
                  required
                />
              </div>
              <div className="form-control mt-6">
              <input type="submit" className="p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold" value="Login"/>
              </div>
            </form>
            <p className="py-4 text-center text-lg -mt-8">
              New to Car Doctor?{" "}
              <Link to={"/signup"} className="text-white-600 font-semibold text-white-600">
                Sign Up
              </Link>
            </p>
            <div className="divider mx-8">OR</div>
                <div className="form-control mx-8 mb-8">
                  <button className="btn">
                    <img
                      className="w-[37px]"
                      src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                    />
                    Login with Google
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
