import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUP = () => {
    const {signUp, userDetails} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(displayName, email, password, photoUrl);
        signUp(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire(
                'Signed in!',
                'You have signed in, Great!',
                'success'
              )
            userDetails(displayName, photoUrl)
            .then(()=>{
                // profile updated
            })
            .catch(error => {
                console.log();
            })
        })
        .catch(error => {
            Swal.fire(
                'Hold on!',
                'Something went wrong',
                'error'
              )
        })
    }
  return (
    <div style={{
        backgroundImage:
          "url(https://i.ibb.co/9ZHcLZK/Screenshot-2023-11-08-190033.png)",
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
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
                <input type="submit" className="btn p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold" value="SignUp"/>
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
