import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, emailVerified, error, setError } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();

        handleUpdateUserProfile(name, photoURL);
        handleEmailVerified();
        toast.success("please verify your email address before login");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleEmailVerified = () => {
    emailVerified()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 mb-5 text-center text-3xl font-bold tracking-tight text-gray-900">
            Registration to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                full Name
              </label>
              <input
                id="full Name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="full Name"
              />
            </div>
            <div>
              <label htmlFor="photoURL" className="sr-only">
                photoURL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="photoURL"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="photoURL"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <p className="text-red-500"> {error}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="Accept Terms and condition"
                name="Accept Terms and condition"
                type="checkbox"
                onClick={handleAccepted}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="Accept Terms and condition"
                className="ml-2 block text-sm text-gray-900"
              ></label>
              {
                <>
                  Accept <Link to="terms"> Terms and condition</Link>
                </>
              }
            </div>

            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!accepted}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Register
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-lg  text-indigo-600">
          Or{" "}
          <Link
            to="#"
            className="font-medium text-indigo-600 hover:text-indigo-300"
          >
            Continue With
          </Link>
        </p>
        <p className="text-center text-sm text-gray-500">
          Already you have an account?<Link to="/login"> Login</Link>
        </p>

        {/* {success && <p>Successfully login</p>}
        <p>
          Forget password?please Reset
          <button
            onClick={handleForgetPassword}
            className="btn btn-secondary text-2xl border-collapse"
          >
            Reset Password
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
