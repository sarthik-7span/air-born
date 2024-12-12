"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <div className="mb-4">
              <div className="h-10 w-10 bg-black rounded-full"></div>
            </div>
            <address className="not-italic text-sm text-gray-700">
              6-VRC Complex, Near Shakti mall, Khanpar Road, Jasdan, Dist -
              Rajkot, Guj. (360050) INDIA
            </address>
            <div className="flex mt-4 space-x-4 text-gray-500">
              <Link href="#">
                <span className="sr-only">Facebook</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 19 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1474 20.2911H16.45L18.1711 13.4069H12.1474V9.9648C12.1474 8.19212 12.1474 6.5227 15.5895 6.5227H18.1711V0.739971C17.61 0.665966 15.4914 0.499023 13.254 0.499023C8.58137 0.499023 5.26318 3.3508 5.26318 8.58796V13.4069H0.100029V20.2911H5.26318V34.92H12.1474V20.2911Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link href="#">
                <span className="sr-only">Twitter</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 37 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6442 4.38253C35.319 4.9849 33.8906 5.38074 32.4104 5.57006C33.925 4.6579 35.0953 3.21222 35.646 1.47396C34.2176 2.33448 32.6342 2.93685 30.9648 3.28106C29.6051 1.80096 27.6948 0.94043 25.5262 0.94043C21.4818 0.94043 18.1774 4.24485 18.1774 8.32374C18.1774 8.9089 18.2462 9.47684 18.3667 10.0104C12.2397 9.70058 6.784 6.75758 3.15258 2.30006C2.51579 3.38432 2.15437 4.6579 2.15437 6.00032C2.15437 8.56469 3.44516 10.8365 5.44158 12.1273C4.21963 12.1273 3.08374 11.7831 2.08553 11.2667V11.3184C2.08553 14.8982 4.63269 17.8928 8.00595 18.564C6.92293 18.8604 5.78595 18.9016 4.68432 18.6845C5.15177 20.1516 6.06724 21.4354 7.30206 22.3553C8.53688 23.2753 10.0289 23.7851 11.5685 23.8132C8.95877 25.8792 5.72383 26.996 2.39532 26.9799C1.81016 26.9799 1.225 26.9455 0.639847 26.8767C3.90984 28.9764 7.79942 30.1983 11.9644 30.1983C25.5262 30.1983 32.9784 18.9426 32.9784 9.18426C32.9784 8.85726 32.9784 8.54747 32.9612 8.22048C34.4069 7.18784 35.646 5.87985 36.6442 4.38253Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link href="#">
                <span className="sr-only">YouTube</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1367 17.8726L23.0689 12.7095L14.1367 7.54631V17.8726ZM34.032 4.39679C34.2558 5.20568 34.4107 6.28995 34.5139 7.66679C34.6344 9.04363 34.686 10.2312 34.686 11.2638L34.7893 12.7095C34.7893 16.4786 34.5139 19.2495 34.032 21.0221C33.6018 22.5711 32.6036 23.5693 31.0546 23.9996C30.2457 24.2233 28.7656 24.3782 26.4938 24.4815C24.2565 24.6019 22.2084 24.6536 20.3153 24.6536L17.5788 24.7568C10.3676 24.7568 5.87564 24.4815 4.10296 23.9996C2.55401 23.5693 1.5558 22.5711 1.12554 21.0221C0.901804 20.2132 0.74691 19.129 0.643647 17.7521C0.523173 16.3753 0.471541 15.1878 0.471541 14.1552L0.368279 12.7095C0.368279 8.94037 0.643647 6.16947 1.12554 4.39679C1.5558 2.84784 2.55401 1.84963 4.10296 1.41937C4.91185 1.19564 6.39196 1.04074 8.66374 0.937477C10.9011 0.817004 12.9492 0.765372 14.8423 0.765372L17.5788 0.662109C24.79 0.662109 29.2819 0.937478 31.0546 1.41937C32.6036 1.84963 33.6018 2.84784 34.032 4.39679Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link href="#">
                <span className="sr-only">Instagram</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5155 11.1162C15.0321 11.1162 13.6094 11.7055 12.5604 12.7545C11.5114 13.8035 10.9221 15.2262 10.9221 16.7096C10.9221 18.1931 11.5114 19.6158 12.5604 20.6648C13.6094 21.7137 15.0321 22.303 16.5155 22.303C17.999 22.303 19.4217 21.7137 20.4707 20.6648C21.5196 19.6158 22.109 18.1931 22.109 16.7096C22.109 15.2262 21.5196 13.8035 20.4707 12.7545C19.4217 11.7055 17.999 11.1162 16.5155 11.1162Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.51444 1.36062C13.4968 0.697501 19.5342 0.697501 25.5166 1.36062C28.7849 1.72548 31.4198 4.29846 31.8036 7.57878C32.5131 13.6449 32.5131 19.773 31.8036 25.8391C31.4198 29.1195 28.7849 31.6924 25.5184 32.059C19.5354 32.7223 13.4974 32.7223 7.51444 32.059C4.24616 31.6924 1.61123 29.1195 1.22744 25.8409C0.517897 19.7742 0.517897 13.6455 1.22744 7.57878C1.61123 4.29846 4.24616 1.72548 7.51444 1.36062ZM25.1208 6.38265C24.6643 6.38265 24.2266 6.56397 23.9038 6.88673C23.5811 7.20949 23.3997 7.64725 23.3997 8.1037C23.3997 8.56015 23.5811 8.99791 23.9038 9.32067C24.2266 9.64343 24.6643 9.82475 25.1208 9.82475C25.5772 9.82475 26.015 9.64343 26.3378 9.32067C26.6605 8.99791 26.8418 8.56015 26.8418 8.1037C26.8418 7.64725 26.6605 7.20949 26.3378 6.88673C26.015 6.56397 25.5772 6.38265 25.1208 6.38265ZM8.34054 16.709C8.34054 14.5408 9.20183 12.4615 10.7349 10.9284C12.2681 9.39525 14.3474 8.53396 16.5155 8.53396C18.6837 8.53396 20.763 9.39525 22.2961 10.9284C23.8292 12.4615 24.6905 14.5408 24.6905 16.709C24.6905 18.8771 23.8292 20.9564 22.2961 22.4895C20.763 24.0227 18.6837 24.8839 16.5155 24.8839C14.3474 24.8839 12.2681 24.0227 10.7349 22.4895C9.20183 20.9564 8.34054 18.8771 8.34054 16.709Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-start-3">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="#">Our Services</Link>
              </li>
              <li>
                <Link href="#">Testimonials</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-700 mb-4">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800"
              >
                GO
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright ©Airborneexports. All Rights Reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
