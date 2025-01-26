import React from "react";
import Slider from "react-slick";
import testimonialProfile from "../../public/assets/images/Rectangle1.jpg"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {

    const testimonials = [
        {
            image: "/assets/images/testimonial1.jpeg",
            content: "The team's outstanding service has significantly boosted my business growth with exceptional product quality!",
            role: "Entrepreneur",
            name: "Darshan Bhanderi"
        },
        {
            image: "/assets/images/testimonial2.jpeg",
            content: "Working with this team has been a seamless experience. They understand the unique needs of freelancers like me.",
            role: "Freelancer",
            name: "Ishan parikh"

        },
        {
            image: "/assets/images/testimonial3.jpeg",
            content: "Their professionalism and timely delivery have been instrumental in achieving our organizational goals.",
            role: "Director",
            name: "Tirup vagasiya"

        }, {
            image: "/assets/images/testimonial4.jpeg",
            content: "As a CEO & Founder, I always look for trustworthy partners. This team has exceeded all my expectations!",
            role: "CEO & Founder",
            name: "Jeet savaliya"

        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-100">

            <div className="max-w-7xl mx-auto p-4 py-20 text-center testimonial-slider">
                <div className="text-center">
                    <h3 className="text-3xl uppercase font-bold text-black mb-4 inline-block relative before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">Testimonials</h3>
                </div>
                <Slider {...settings} className="mt-8 space-x-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="!flex shadow-md flex-col sm:flex-row items-start gap-6 p-8 rounded-md bg-gray-50"
                        >
                            <div className="flex-shrink-0 relative mx-auto sm:-ml-12 w-32 h-32 rounded-full overflow-hidden shadow-md">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full text-center md:text-left">
                                <div className="text-base md:text-lg text-gray-700 relative">
                                    <span className="absolute inline-block leading-none -top-6 -left-3 text-gray-300 text-7xl z-0">
                                        &#8220;
                                    </span>
                                    <p className="relative z-10 italic">
                                        {testimonial.content}
                                    </p>
                                    <span className="absolute inline-block leading-none -bottom-4 -right-3 text-gray-300 text-7xl z-0">
                                        &#8221;
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-black mt-4">{testimonial.name}</h3>
                                <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </section>

    );
};

export default TestimonialSlider;
