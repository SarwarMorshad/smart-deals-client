import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
        <div className="card-body p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Register Now!</h1>
            <p className="text-lg text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Login Now
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-gray-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full text-lg py-6 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-lg py-6 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Image URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-gray-700">Image-URL</span>
              </label>
              <input
                type="text"
                name="imageURL"
                placeholder="Enter your image URL"
                className="input input-bordered w-full text-lg py-6 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full text-lg py-6 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Register Button */}
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn btn-lg bg-purple-600 hover:bg-purple-700 text-white border-none text-xl font-semibold rounded-lg h-16 w-full"
              >
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-lg font-bold text-gray-800 my-8">OR</div>

          {/* Google Sign Up Button */}
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-lg btn-outline w-full text-lg font-semibold rounded-lg h-16 hover:bg-gray-50"
          >
            <FcGoogle className="text-3xl mr-3" />
            Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
