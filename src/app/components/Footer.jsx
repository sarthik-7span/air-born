"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/icons/air-borne.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="flex mb-4">
              <Image
                className="w-auto h-8 lg:h-10"
                src={Logo}
                alt="Airborne Exports Logo"
              />
            </Link>
            <address className="not-italic text-sm text-gray-700">
              6-VRC Complex, Near Shakti mall, Khanpar Road, Jasdan, Dist -
              Rajkot, Guj. (360050) INDIA
            </address>
            <div className="flex mt-4 items-start space-x-3 text-gray-500">
              <Link target="_blank" href="https://www.facebook.com/share/1KebSnq2Dc/?mibextid=wwXIfr">
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
              <Link target="_blank" href="https://x.com/airborneexports?s=11">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z" /></svg>
              </Link>

              <Link target="_blank" href="https://www.instagram.com/airborneexports/">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.51444 1.36062C13.4968 0.697501 19.5342 0.697501 25.5166 1.36062C28.7849 1.72548 31.4198 4.29846 31.8036 7.57878C32.5131 13.6449 32.5131 19.773 31.8036 25.8391C31.4198 29.1195 28.7849 31.6924 25.5184 32.059C19.5354 32.7223 13.4974 32.7223 7.51444 32.059C4.24616 31.6924 1.61123 29.1195 1.22744 25.8409C0.517897 19.7742 0.517897 13.6455 1.22744 7.57878C1.61123 4.29846 4.24616 1.72548 7.51444 1.36062ZM25.1208 6.38265C24.6643 6.38265 24.2266 6.56397 23.9038 6.88673C23.5811 7.20949 23.3997 7.64725 23.3997 8.1037C23.3997 8.56015 23.5811 8.99791 23.9038 9.32067C24.2266 9.64343 24.6643 9.82475 25.1208 9.82475C25.5772 9.82475 26.015 9.64343 26.3378 9.32067C26.6605 8.99791 26.8418 8.56015 26.8418 8.1037C26.8418 7.64725 26.6605 7.20949 26.3378 6.88673C26.015 6.56397 25.5772 6.38265 25.1208 6.38265ZM8.34054 16.709C8.34054 14.5408 9.20183 12.4615 10.7349 10.9284C12.2681 9.39525 14.3474 8.53396 16.5155 8.53396C18.6837 8.53396 20.763 9.39525 22.2961 10.9284C23.8292 12.4615 24.6905 14.5408 24.6905 16.709C24.6905 18.8771 23.8292 20.9564 22.2961 22.4895C20.763 24.0227 18.6837 24.8839 16.5155 24.8839C14.3474 24.8839 12.2681 24.0227 10.7349 22.4895C9.20183 20.9564 8.34054 18.8771 8.34054 16.709Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link target="_blank" href="https://youtube.com/@airborneexports?si=Ed8xPO00an3p_RzY">
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
              <Link target="_blank" href="https://www.linkedin.com/company/airborne-exports/">
                <span className="sr-only">Linkdin</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" /></svg>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          {/* <div className="lg:col-start-3">
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
          </div> */}
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
