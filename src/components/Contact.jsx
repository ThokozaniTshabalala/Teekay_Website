import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Message sent successfully!"); // Simulate success message

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    
    <div className="pt-9">
    <div className="border-t border-gray-300"></div>
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="text-gray-700 flex items-center">
            <i className="fas fa-paper-plane mr-2"></i> thokozanierick02@gmail.com
          </p>
          <p className="text-gray-600 text-sm">
            Wait five seconds after submitting response to see if a success message pops up below the submit button.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl mt-4">
            <a href="https://www.linkedin.com/in/thokozani-tshabalala-b7746a23b/" target="_blank" className="text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-pink-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-600">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/ThokozaniTshabalala" target="_blank" className="text-gray-800">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-2 border-2 border-black border-dashed text-black font-semibold rounded-lg transition hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </form>
          {/* Success Message */}
          <span className="text-green-600 font-semibold block mt-2">{message}</span>
        </div>
      </div>
    </div>
    <p className="font-semibold text-gray-700 text-center pb-7">Copyright © Thokozani Tshabalala </p>
    </div>
  );
};

export default Contact;
