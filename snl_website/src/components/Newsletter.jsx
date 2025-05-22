import React from "react";

const Newsletter = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-xl bg-green-50 p-8 shadow-md">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Stay Connected
            </h2>
            <p className="mb-6 text-gray-600">
              Stay connected. Receive impact updates, project launches, and
              partnership opportunities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-200 bg-white"
              />
              <button className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
