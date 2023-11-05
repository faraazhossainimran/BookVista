import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const SignUP = () => {
    const {signUp} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signUp(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="hero py-16">
        <div className="card glass md:w-[400px] flex-col">
          <div className="text-center mt-4">
            <h1 className="text-5xl font-bold mb-4 text-white-200">SignUp now!</h1>
          </div>
          <div className="card w-full shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold" value="SignUp"/>
                {/* <button className="p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold">SignUp</button> */}
              </div>
            </form>
            <p className='py-4 text-center text-lg -mt-8'>Already Have an account? <Link to={'/login'} className='text-white-600 font-semibold'>Login</Link></p>
            <div className="divider mx-8">OR</div>
                <div className="form-control mx-8 mb-8">
                  <button className="btn">
                    <img
                      className="w-[37px]"
                      src="https://i.ibb.co/dBTSL19/icons8-google-48.png"
                    />
                    SignUp with Google
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
