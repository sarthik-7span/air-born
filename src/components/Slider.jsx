"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function SlickSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const products = [
    {
      title: "Vegetables",
      description:
        "We export fresh fruits, vegetables, and agricultural products, ensuring top quality, natural freshness, and global standards for healthy living.",
      image: "healthy-vegetables-wooden-table-min.jpg",
      hrefLink: "/products/vegetables"
    },
    {
      title: "Ground Spices",
      description:
        "We export premium whole spices like cinnamon, cardamom, black pepper, and nutmeg, delivering freshness, rich aroma, and authentic flavor worldwide.",
      image: "top-view-indian-seasonings-spices-table-min.jpg",
      hrefLink: "/products/ground-spices"
    },
    {
      title: "Whole Spices",
      description:
        "We export premium spice powders like turmeric, chili, coriander, and cumin, offering rich flavor, vibrant color, and global quality standards.",
      image: "flat-lay-spices-frame-with-copy-space-min.jpg",
      hrefLink: "/products/whole-spices"
    }
  ];
  return (
    <Slider className="Product__slider" {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          <Link href={product.hrefLink} className="group flex flex-col items-center bg-white shadow-md mx-4 my-2 rounded-md overflow-hidden hover:scale-[102%] duration-200">
            <img
              src={`/assets/images/${product.image}`}
              alt={product.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base xl:text-xl font-bold uppercase">{product.title}</h3>
              <p className="text-gray-500 my-1 xl:my-2 font-semibold text-sm xl:text-base">{product.description}</p>
              <div href="/products" className="px-4 py-2 font-bold text-base xl:text-xl text-black inline-flex gap-3 items-center mx-auto rounded capitalize">
                show more
                <span className="duration-700 group-hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.0724 9.69629L25.7309 0.261491V19.1311L42.0724 9.69629ZM0.673828 11.3304H27.365V8.06213H0.673828V11.3304Z" fill="black" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
