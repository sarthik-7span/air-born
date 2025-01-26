"use client";

import React, { useState, useEffect } from "react";

export default function CoverSlider() {
    const slides = [
        {
            title: "Empowering Global Trade with Quality.",
            description:
                "We believe in delivering more than just products. At Airborne Exports, we bring India’s premium goods and trustworthy services, making every trade successful and impactful.",
            image: "./assets/images/import3.jpg",
        },
        {
            title: "Beyond Boundaries, Beyond Expectations.",
            description:
                "At Airborne Exports, we are proud to be a trusted name in merchant-based exporting, bringing the best of India’s diverse and high-quality products to customers across the globe. We focus on delivering excellence in every shipment, ensuring our products reflect the rich heritage and craftsmanship of India. From sourcing premium goods to handling smooth and reliable logistics, our goal is to connect global markets with India’s finest. With Airborne Exports, you can count on quality, trust, and a commitment to your success.",
            image: "./assets/images/import2.jpg",
        },
        {
            title: "Empowering Global Trade with Quality.",
            description:
                "We believe in delivering more than just products. At Airborne Exports, we bring India’s premium goods and trustworthy services, making every trade successful and impactful.",
            image: "./assets/images/import4.jpg",
        },
        {
            title: "Beyond Boundaries, Beyond Expectations.",
            description:
                "At Airborne Exports, we are proud to be a trusted name in merchant-based exporting, bringing the best of India’s diverse and high-quality products to customers across the globe. We focus on delivering excellence in every shipment, ensuring our products reflect the rich heritage and craftsmanship of India. From sourcing premium goods to handling smooth and reliable logistics, our goal is to connect global markets with India’s finest. With Airborne Exports, you can count on quality, trust, and a commitment to your success.",
            image: "./assets/images/import5.jpg",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div
                className="py-20 lg:py-36 overflow-hidden relative h-[400px] lg:h-[700px]"
                style={{ position: "relative" }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute flex items-center inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100 z-10" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url("${slide.image}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-gray-900/50 z-10"></div>

                        {/* Text Content */}
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                            <div
                                className={`md:w-2/3 lg:w-3/4 text-white transition-all duration-1000 ${currentSlide === index
                                        ? "animate-fadeInUp"
                                        : "opacity-0"
                                    }`}
                            >
                                <h1
                                    className={`text-4xl font-semibold lg:text-7xl transition-transform duration-700 ${currentSlide === index
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                        }`}
                                >
                                    {slide.title}
                                </h1>
                                <p
                                    className={`text-sm mt-4 lg:text-2xl transition-transform duration-700 delay-200 ${currentSlide === index
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                        }`}
                                >
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
