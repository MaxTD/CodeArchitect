// Contact.js
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1024px] mx-auto px-4 py-12 content-with-padding"
    >
      <div className="bg-gray-800 rounded-lg p-8 md:p-12 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">
            #Get in Touch
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always excited to discuss new projects and opportunities. Feel
            free to reach out to me for any inquiries or collaborations.
          </p>
          <div className="flex mb-4">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Call me</p>
              <a
                href="tel:+1234567890"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                61+ 411 284 273
              </a>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Email me</p>
              <a
                href="mailto:carlo@example.com"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                carlofolino2002@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0">
          <h3 className="text-xl font-bold mb-4 text-pink-500">
            Send me a message
          </h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 bg-gray-700 text-white rounded-md"
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
