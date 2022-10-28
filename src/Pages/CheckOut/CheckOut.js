import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const {
    logo,
    coursesName,
    priceAll,
    pricePer,
    ratings,
    totalTime,
    videos,
    details,
  } = useLoaderData();
  const checkoutHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const card = form.card.value;
    if (card) {
      toast.success("Thanks for enroll course ,, we will inform you letter");
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="leading-loose">
        <form
          onSubmit={checkoutHandle}
          className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
        >
          <p className="text-gray-800 font-bold pb-3 text-center">
            {coursesName}
          </p>
          <p className="text-gray-800 font-medium">Student information</p>
          <div className="">
            <label className="block text-sm text-gray-00" for="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" for="cus_email">
              Email
            </label>
            <input
              className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" for="cus_email">
              Address
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Street"
              aria-label="Email"
            />
          </div>
          <div className="mt-2">
            <label
              className="hidden text-sm block text-gray-600"
              for="cus_email"
            >
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="City"
              aria-label="Email"
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              className="hidden block text-sm text-gray-600"
              for="cus_email"
            >
              Country
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Country"
              aria-label="Email"
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label
              className="hidden block text-sm text-gray-600"
              for="cus_email"
            >
              Zip
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Zip"
              aria-label="Email"
            />
          </div>
          <p className="mt-4 text-gray-800 font-medium">Payment information</p>
          <div className="">
            <label className="block text-sm text-gray-600" for="cus_name">
              Card
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="card"
              type="text"
              required
              placeholder="Card Number MM/YY CVC"
              aria-label="Name"
            />
          </div>
          <div className="mt-4 flex md:flex-row flex-col gap-3 justify-center">
            <button
              title="Permanent"
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              {priceAll} fixed amounts
            </button>
            <button
              title="Per month"
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              {pricePer}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
