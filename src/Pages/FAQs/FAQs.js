import React, { useState } from "react";
import { Link } from "react-router-dom";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
const FAQs = () => {
  return (
    <div className="h-screen">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <Link to="/" class="mb-6 sm:mx-auto">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div class="space-y-4">
            <Item title=" What is CORS used for?">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources
            </Item>
            <Item
              title="Why are you using firebase?
             What other options do you have to implement authentication?"
            >
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br />
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </Item>
            <Item title="How does the private route work?">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </Item>
            <Item title="What is Node? How does Node work?">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine (i.e. V8
              engine) and executes JavaScript code outside a web browser, which
              was designed to build scalable network applications.
              <br />
              Node JS Web Server internally maintains a Limited Thread pool to
              provide services to the Client Requests. Node JS Web Server
              receives those requests and places them into a Queue. It is known
              as “Event Queue”. Node JS Web Server internally has a Component,
              known as “Event Loop”.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
