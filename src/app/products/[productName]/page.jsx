"use client"
import ContactForm from "@/components/ContactForm";
import React from "react";
import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter()

    console.log("hello", router.query.productName);

    return (
        <main>
            <section className="bg-[url('/assets/images/product-cover.jpg')] py-24 md:py-36 bg-no-repeat bg-cover -bg-top-10">
                <h1 className="px-4 mx-auto text-3xl md:text-4xl max-w-7xl text-center font-semibold text-black uppercase">
                    PRODUCTS
                </h1>
            </section>
            <section>
                <div className="bg-white py-10 p-4 mx-auto max-w-7xl">
                    <h1 className="text-2xl font-bold text-center mb-6">{router}</h1>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="p-4 border-2 border-gray-300 rounded-lg">
                                <img src="/assets/images/corn.jpg" alt="Red Chilli Powder" className="rounded-lg object-contain" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Origin</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">India</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Purity</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">100%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Moisture</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">10.10% Max</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Type</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">Conventional</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Self Life</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">1%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Form</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">Powder</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Packaging</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">15/25/50 KG</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-semibold border-b">Loading</td>
                                        <td className="py-2 px-4 text-gray-600 border-b">20' FCL- 16 MT</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button
                                className="mt-6 w-full py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition"
                            >
                                Inquire now
                            </button>
                        </div>
                    </div>
                    <div className="text-center text-lg space-y-5 mt-12 lg:mt-24">
                        <p className="text-gray-700 leading-relaxed">
                            Red Chilly is stated to be a native of South America and widely grown in all parts of India as well.
                            It was the first coming insight in India by the Portuguese towards before the start of the 16th
                            Century. Now it is grown all over the world's warm place,
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Red chili powder is a product of raw and dry chili after the grinding process through special
                            equipment. Red pepper powder is widely used in all kinds of recipes worldwide. It is also known as
                            gochugaru and Mirchi powder in the Korean market and Indian market, respectively.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Dry chilly is broadly used as a spice in curried dishes. It is also used as an ingredient in the
                            making of the most curry-making recipes.
                        </p>
                    </div>
                </div>
            </section>
            <ContactForm />
        </main>
    );
};

export default Product;
