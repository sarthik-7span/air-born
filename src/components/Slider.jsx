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
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "Ground Spices",
      description:
        "We export premium whole spices like cinnamon, cardamom, black pepper, and nutmeg, delivering freshness, rich aroma, and authentic flavor worldwide.",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "Whole Spices",
      description:
        "We export premium spice powders like turmeric, chili, coriander, and cumin, offering rich flavor, vibrant color, and global quality standards.",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  return (
    <Slider className="Product__slider" {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex flex-col items-center bg-white shadow-md mx-4 my-2 rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-8 text-left">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
                Show more
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
