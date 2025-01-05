import React from "react";

const ContactForm = ({ inquiryFor }) => {

  return (
    <div className="px-4 mx-auto max-w-7xl py-10 md:py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
        <div className="flex-1 ">
          <div>
            <span className="uppercase text-sm">Contact Now</span>
            <h2 className="mb-4 uppercase text-3xl md:text-4xl tracking-tight font-bold text-gray-900">
              GET IN TOUCH NOW
            </h2>
          </div>
          <div className="space-y-3 mt-16 xl:pr-44">
            <div>
              <h4 className="text-sm font-semibold uppercase">discription</h4>
              <p className="text-base">
                We're here to help with any questions or inquiries. Reach out to
                Airborne Export today! We look forward to connecting with you!
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase">Phone</h4>
              <a
                href="tel:+919537004005"
                className="text-base text-black hover:underline"
              >
                +91 9537 004 005
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase">Email</h4>
              <a
                href="mailto:info@airborne.com"
                className="text-base text-black hover:underline"
              >
                info@airborne.com
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase">Address</h4>
              <p className="text-base text-gray-700">
                6-VRC Complex, Opp. New Bus Stand, Jasdan, Rajkot, Guj. (360050)
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                number
              </label>
              <input
                type="number"
                id="number"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-0 focus:border-primary"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 capitalize"
              >
                your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:border-primary "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            {
              inquiryFor && <div>
                <p>Enquiry  Product: <span className="font-bold">{inquiryFor}</span></p>
              </div>
            }
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 opacity-95 hover:opacity-100"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
