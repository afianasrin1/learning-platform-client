import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { FaGoogle, FaGithub, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import toast from "react-hot-toast";
const Login = () => {
  const { providerLogin, login, error, setError } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
        } else {
          toast.error("your email is not verified,pls verified email ");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  };

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
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
            Login to your account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          handleSubmit
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
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
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Login
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
        <div className="btn-group btn-group-vertical  w-full justify-center ">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-active btn-outline btn-accent mb-3"
          >
            <FaGoogle /> Login With Google
          </button>
          <button className="btn btn-outline btn-accent mb-3">
            <FaMailBulk /> Login With Email & Password
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn btn-outline btn-accent mb-3 "
          >
            <FaGithub /> Login With Github
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          No account?<Link to="/register"> Register</Link>
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

export default Login;
