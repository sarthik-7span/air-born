"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const products = [
    {
      title: "Others",
      description:
        "We export fresh fruits, vegetables, and agricultural products, ensuring top quality, natural freshness, and global standards for healthy living.",
      image: "Rectangle1.jpg",
    },
    {
      title: "Ground Spices",
      description:
        "We export premium whole spices like cinnamon, cardamom, black pepper, and nutmeg, delivering freshness, rich aroma, and authentic flavor worldwide.",
      image: "Rectangle2.jpg",
    },
    {
      title: "Whole Spices",
      description:
        "We export premium spice powders like turmeric, chili, coriander, and cumin, offering rich flavor, vibrant color, and global quality standards.",
      image: "Rectangle3.jpg",
    },
  ];
  return (
    <Slider className="Product__slider" {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex flex-col items-center bg-white shadow-md mx-4 my-2 rounded-md overflow-hidden">
            <img
              src={`/assets/images/${product.image}`}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold uppercase">{product.title}</h3>
              <p className="text-gray-500 my-4 font-bold">{product.description}</p>
              <button className="group px-4 py-2 font-bold text-xl text-black flex gap-5 items-center mx-auto rounded hover:bg-gray-800">
                Show MORE
                <span className="duration-1000 group-hover:translate-x-3">
                  <svg width="20" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.0724 9.69629L25.7309 0.261491V19.1311L42.0724 9.69629ZM0.673828 11.3304H27.365V8.06213H0.673828V11.3304Z" fill="black" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
