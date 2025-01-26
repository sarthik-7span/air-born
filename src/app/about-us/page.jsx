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
            <section className="bg-gray-100">
                <div className='mx-auto max-w-7xl py-12 px-4 sm:px-8 lg:px-16'>
                    <div className="container mx-auto py-10 px-4">
                        <div className="grid relative grid-cols-1 lg:grid-cols-2 items-start justify-between gap-16">
                            <div className="text-center lg:before:content-[''] lg:before:absolute lg:before:left-1/2 lg:before:transform lg:before:-translate-x-1/2 lg:before:top-0 lg:before:h-full lg:before:w-[1px] lg:before:bg-primary/10">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-black mb-4 inline-block relative before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">What We Are</h3>
                                </div>
                                <p className="text-gray-600 text-left lg:text-center">
                                    <strong>Airborne Exports</strong> is a certified Indian export business committed to delivering the finest Indian products to customers across the globe. Driven by a vision to connect India’s rich and diverse offerings with international markets, we specialize in meeting global demands with <strong>quality and reliability</strong>.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-black mb-4 inline-block relative before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">What We Serve</h3>
                                </div>
                                <p className="text-gray-600 text-left lg:text-center mb-4">We export a wide range of premium Indian products, including:</p>
                                <ul className="list-disc text-left list-inside text-gray-600">
                                    <li>
                                        <strong>Spices:</strong> Authentic and aromatic Indian spices.
                                    </li>
                                    <li>
                                        <strong>Vegetables:</strong> Fresh and farm-grown produce.
                                    </li>
                                    <li>
                                        <strong>Agricultural Products:</strong> High-quality grains, pulses, and more.
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-4 text-left">
                                    Our services cater specifically to importers worldwide, offering products customized to your needs with guaranteed excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>

                        <button onClick={handleScroll}
                            className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-900">
                            Get in Touch
                        </button>
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