import React from "react";

const ContactForm = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
      <div className="flex gap-24">
        <div className="flex-1">
          <div>
            <h2 class="mb-4 uppercase text-4xl tracking-tight font-bold text-gray-900">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-black sm:text-base">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>
          <div className="space-y-3">
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
        <div class="flex-1">
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                name
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                for="number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                number
              </label>
              <input
                type="number"
                id="number"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
              >
                your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 capitalize"
              >
                your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 opacity-95 hover:opacity-100"
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
