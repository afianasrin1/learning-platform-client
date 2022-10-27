import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              weekend
            </a>{" "}
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            What is CORS used for?
          </a>
          <p className="mb-5 text-gray-700">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Vasile Melinte
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              holidays
            </a>{" "}
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Happy new Year"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Why are you using firebase? What other options do you have to
            implement authentication?
          </a>
          <p className="mb-5 text-gray-700">
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
            <br />
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                John Doe
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              weekend
            </a>{" "}
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            What is Node? How does Node work?
          </a>
          <p className="mb-5 text-gray-700">
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine (i.e. V8
            engine) and executes JavaScript code outside a web browser, which
            was designed to build scalable network applications.
            <br />
            Node JS Web Server internally maintains a Limited Thread pool to
            provide services to the Client Requests. Node JS Web Server receives
            those requests and places them into a Queue. It is known as “Event
            Queue”. Node JS Web Server internally has a Component, known as
            “Event Loop”.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Vasile Melinte
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              programming
            </a>{" "}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Why i love C++"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            How does the private route work?
          </a>
          <p className="mb-5 text-gray-700">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Andrew Larkin
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
