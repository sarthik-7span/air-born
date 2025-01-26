'use client';

import ContactForm from '@/components/ContactForm'
import TestimonialSlider from '@/components/TestimonialSlider';
import WhyChooseUs from '@/components/WhyChooseUs'
import React, { useRef } from 'react'

const page = () => {
    const bottomRef = useRef(null);

    const handleScroll = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className="mx-auto max-w-7xl py-12 px-4 sm:px-8 lg:px-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">ABOUT US</h2>
                    <p className="text-gray-700">
                        Welcome to Inspiring Infotech — your trusted partner for innovative digital solutions. Our
                        team of skilled professionals specializes in delivering top-notch web development, digital
                        marketing, and graphic design services to empower businesses with a strong and impactful
                        online presence.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <div className="flex-1 text-gray-700">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Tailored solutions designed to meet your unique business objectives.</li>
                            <li>A passionate team committed to delivering exceptional results.</li>
                            <li>Excellence in quality, attention to detail, and outstanding customer service.</li>
                        </ul>
                    </div>
                    <div className="flex-1 text-gray-700">
                        <p>
                            Whether you need a cutting-edge website, a refined digital marketing strategy, or
                            eye-catching graphic designs, we have the expertise to bring your vision to life. Our
                            mission is to help you achieve measurable growth and take your business to new heights.
                        </p>
                        <button onClick={handleScroll}
                            className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-900">
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="text-left">
                    <div className="mb-6">
                        <h3 className="text-2xl font-medium text-gray-800 mb-2">Our Mission</h3>
                        <p className="text-gray-700">
                            Our mission is to empower businesses of all sizes with innovative digital solutions that
                            foster growth and enhance online presence. We aim to provide affordable, high-quality
                            web development, digital marketing, and graphic design services that drive results and
                            contribute to the success of our clients.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium text-gray-800 mb-2">Our Vision</h3>
                        <p className="text-gray-700">
                            Our vision is to be a leading digital solutions provider recognized for our creativity,
                            technical expertise, and customer-centric approach. We aspire to be a trusted partner
                            for businesses seeking innovative solutions that help them stay ahead in a rapidly
                            changing digital landscape.
                        </p>
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <TestimonialSlider />
            <div ref={bottomRef}>
                <ContactForm />
            </div>
        </>
    )
}

export default page