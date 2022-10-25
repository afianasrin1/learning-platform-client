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
            <Item title="What is the purpose of React Router?">
              React Router is a state container for the current location , or
              URL. It keeps track of the location and renders different routes
              as it changes, and it also gives you tools to update the location
              using Link s and the history API.
            </Item>
            <Item title="How does work context api ?">
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state. More information can be found on React's documentation
              page
            </Item>
            <Item title="write about useRef hook?">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly. How does useRef work in React? useRef returns a mutable
              ref object whose .current property is initialized to the passed
              argument ( initialValue ). The returned object will persist for
              the full lifetime of the component. Essentially, useRef is like a
              “box” that can hold a mutable value in its .current property.
            </Item>
            <Item title="write about useRef hook?">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly. How does useRef work in React? useRef returns a mutable
              ref object whose .current property is initialized to the passed
              argument ( initialValue ). The returned object will persist for
              the full lifetime of the component. Essentially, useRef is like a
              “box” that can hold a mutable value in its .current property.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
