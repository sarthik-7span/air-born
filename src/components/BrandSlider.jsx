"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '60px',

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
            image: "brand1.svg",
        },
        {
            image: "brand3.svg",
        }, {
            image: "brand4.svg",
        },
        {
            image: "brand2.svg",
        },
        {
            image: "brand5.png",
        },
        {
            image: "brand6.png",
        }, {
            image: "brand7.png",
        }
    ];
    return (
        <Slider className="brand__slider" {...settings}>
            {products.map((product, index) => (
                <div key={index} className="h-40">
                    <img
                        src={`/assets/images/${product.image}`}
                        alt={product.title}
                        className="brand__image w-full h-32 object-contain duration-700"
                    />
                </div>
            ))}
        </Slider>
    );
}
