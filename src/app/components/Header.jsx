"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/assets/icons/air-borne.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isHovring, setIsHovring] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isIndex, setIsIndex] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const currentPath = usePathname();

  const whole_spices = [
    {
      name: "Whole Chili",
      image: "whole-chilli.png"
    },
    {
      name: "Turmeric",
      image: "turmeric.png"
    },
    {
      name: "Cloves",
      image: "cloves.png"
    },
    {
      name: "Black Pepper",
      image: "black-pepper.png"
    },
    {
      name: "Dry Ginger",
      image: "dry-ginger.png"
    },
    {
      name: "Star Anise",
      image: "star-anis.png"
    }
  ]
  const ground_spices = [
    {
      name: "Chili Powder",
      image: "chili-powder.png"
    },
    {
      name: "Cumin Powder",
      image: "cumin-powder.png"
    },
    {
      name: "Coriander Powder",
      image: "coriander.png"
    },
    {
      name: "Turmeric Powder",
      image: "turmerics.png"
    },
    {
      name: "Ginger Powder",
      image: "ginger.png"
    },
    {
      name: "Garlic Powder",
      image: "garlic-powder.png"
    },
    {
      name: "Cinnamon",
      image: "cinnamon.png"
    },
    {
      name: "Onion Powder",
      image: "onion-powder.png"
    },
    {
      name: "Banana Powder",
      image: "banana-powder.png"
    }
  ]
  const seeds = [
    {
      name: "Cumin",
      image: "cumin.png"
    },
    {
      name: "White Sesame",
      image: "white-sesame.png"
    },
    {
      name: "Black Sesame",
      image: "black-sesame.png"
    },
    {
      name: "Coriander",
      image: "coriander.png"
    }
  ]
  const millets_and_grains = [
    {
      name: "Wheat",
      image: "wheat.png"
    },
    {
      name: "Cotton",
      image: "cotton.png"
    },
    {
      name: "Basmati Rice",
      image: "basmati.png"
    },
    {
      name: "Non-Basmati Rice",
      image: "non-basmati.png"
    },
    {
      name: "Groundnuts",
      image: "groung-nut.png"
    },
    {
      name: "Corn",
      image: "corn.png"
    },
    {
      name: "Soybean",
      image: "soyabean.png"
    }
  ]
  const pulses = [
    {
      name: "White Chickpeas",
      image: "white-chickpeas.png"
    },
    {
      name: "Brown Chickpeas",
      image: "brown-chickpeas.png"
    }
  ]
  const vegetables = [
    {
      name: "Carrot",
      image: "carrot.png"
    },
    {
      name: "Garlic",
      image: "garlic.png"
    },
    {
      name: "Potato",
      image: "potato.png"
    },
    {
      name: "Tomato",
      image: "tamato.png"
    },
    {
      name: "Onion",
      image: "onion.png"
    },
    {
      name: "Cabbage",
      image: "cabbage.png"
    }
  ]
  const fruits = [
    {
      name: "Mango",
      image: "mango.png"
    },
    {
      name: "Banana",
      image: "banana.png"
    },
    {
      name: "Orange",
      image: "orange.png"
    },
    {
      name: "Pineapple",
      image: "pineapple.png"
    },
    {
      name: "Watermelon",
      image: "watermelon.png"
    }
  ]


  const categories = [
    { name: "Whole Spices", subCategories: whole_spices },
    { name: "Ground Spices", subCategories: ground_spices },
    { name: "Seeds", subCategories: seeds },
    { name: "Millets And Grains", subCategories: millets_and_grains },
    { name: "Pulses", subCategories: pulses },
    { name: "Vegetables", subCategories: vegetables },
    { name: "Fruits", subCategories: fruits },
  ];
  const handleMobileProductsClick = () => {
    setIsMobileProductsOpen((prevState) => !prevState); // Toggle Products dropdown in mobile
  };
  const handleMouseEnter = () => {
    setIsHovring(true);
  };

  const handleMouseLeave = () => {
    setIsHovring(false);
  };

  return (
    <header className="bg-white shadow-md sticky z-50 top-0">
      <div className="px-4 py-1 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image loading="lazy"
                className="w-auto h-14 md:h-16"
                src={Logo}
                alt="Airborne Exports Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => { setIsMenuOpen(!isMenuOpen); setIsIndex(null); setHoveredCategory(null) }}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              href="/"
              className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Products")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`text-base p-1 font-medium transition-all duration-200 ${currentPath.startsWith("/products")
                  ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                  : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                  }`}
              >
                Products
              </div>
              {isHovring && (
                <div className="cursor-pointer absolute left-0 bg-white border border-gray-200 rounded-lg  w-56 shadow-md">
                  {categories.map((category, index) => (
                    <Link key={index} href={`/products/${category.name.trim().toLowerCase().replace(/\s+/g, '-')}`}>
                      <div
                        key={category.name}
                        onClick={() => {
                          if (hoveredCategory == category.name) {
                            setHoveredCategory("Products")
                          } else {
                            setHoveredCategory(category.name)
                          }
                        }
                        }
                        className="hover:bg-gray-100 relative group"
                      >
                        <div className="flex items-center p-2">
                          <svg className="invisible group-hover:visible rotate-90 duration-200 group-hover:-translate-x-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000" />
                          </svg>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <ul className="bg-gray-50 shadow-md hidden group-hover:block absolute right-full top-0 rounded-l-lg w-full max-w-60">
                          {category.subCategories.map((sub, index) => (
                            <li
                              key={sub.name}
                            >
                              <Link className="inline-flex items-center gap-2 pl-8 hover:bg-gray-200 py-1.5 hover:text-blue-600 duration-200 w-full" href={`/products/${category.name.trim().toLowerCase().replace(/\s+/g, '-')}/${sub.name.trim().toLowerCase().replace(/\s+/g, '-')}`}
                                key={index}>
                                <Image loading="lazy" className="mix-blend-multiply" alt={sub.name} src={`/assets/icons/${sub.image}`} width={25} height={25} />
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact-us"
              className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/contact-us"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              Contact us
            </Link>
            <Link
              href="/about-us"
              className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/about-us"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              About us
            </Link>
          </div>
        </nav>

        {
          isMenuOpen && (
            <nav className="absolute left-0 right-0 top-16 pt-4 mb-6 pb-6 bg-white border border-gray-200 shadow-md lg:hidden">
              <div className="flow-root">
                <div className="flex flex-col -my-2 space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base px-4 p-1 font-medium transition-all duration-200 ${currentPath === "/"
                      ? "text-blue-600 !font-bold bg-blue-50"
                      : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                      }`}
                  >
                    Home
                  </Link>
                  <div>
                    <button
                      onClick={() =>
                        setHoveredCategory((prev) =>
                          prev === "Products" ? null : "Products"
                        )
                      }
                      className={`flex justify-between items-center text-base px-4 p-1 font-medium w-full transition-all duration-200 ${currentPath.startsWith("/products")
                        ? "text-blue-600 !font-bold bg-blue-50"
                        : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                        }`}
                    >
                      Products
                      <svg
                        className={`w-4 h-4 transform transition-transform ${hoveredCategory === "Products" ? "rotate-180" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {hoveredCategory === "Products" && (
                      <ul className="mt-1 space-y-1 bg-blue-50">
                        {categories.map((category, index) => (
                          <li key={category.name}>
                            <button
                              onClick={() => {
                                setIsMobileProductsOpen(!isMobileProductsOpen)
                                if (isIndex === index) {
                                  setIsIndex(null)
                                } else {
                                  setIsIndex(index)
                                }
                              }
                              }
                              className="pl-4 pr-4 flex justify-between py-1 items-center w-full text-sm font-medium text-black hover:text-blue-600"
                            >
                              {category.name}
                              <svg
                                className={`w-4 h-4 transform transition-transform ${isIndex === index ? "rotate-180" : ""}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {isIndex === index && (
                              <ul className="bg-blue-100 mt-1 space-y-1">
                                {category.subCategories.map((sub) => (
                                  <li key={sub.name}>
                                    <Link
                                      href={`/products/${category.name.trim().toLowerCase().replace(/\s+/g, '-')}/${sub.name
                                        .trim()
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      onClick={() => { setIsMenuOpen(false); setIsActive(sub.name) }}
                                      className={`pl-6 flex items-center gap-2 py-1.5 text-sm text-gray-800 hover:text-blue-600 ${sub.name === isActive ? 'bg-blue-200' : ''}`}
                                    >
                                      <Image loading="lazy" className="mix-blend-multiply" alt={sub.name} src={`/assets/icons/${sub.image}`} width={25} height={25} />
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    href="/contact-us"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base px-4 p-1 font-medium transition-all duration-200 ${currentPath === "/contact-us"
                      ? "text-blue-600 !font-bold bg-blue-50"
                      : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                      }`}
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/about-us"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base px-4 p-1 font-medium transition-all duration-200 ${currentPath === "/about-us"
                      ? "text-blue-600 !font-bold bg-blue-50"
                      : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                      }`}
                  >
                    About us
                  </Link>
                </div>
              </div>
            </nav>
          )
        }
      </div >
    </header >
  );
};

export default Header;
