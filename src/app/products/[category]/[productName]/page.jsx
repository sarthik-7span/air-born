'use client';

import React, { useRef } from "react";
import ContactForm from "@/components/ContactForm";
import product from "@/data/products.json";

const ProductDescription = ({ descriptions }) => (
    <div className="text-left md:text-center text-lg space-y-5 mt-12 lg:mt-16 italic">
        {descriptions.map((desc, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">{desc}</p>
        ))}
    </div>
);

const ProductTable = ({ details }) => (
    <table className="w-full border-collapse">
        <tbody>
            {details.map((item, index) => (
                <tr key={index}>
                    <td className="py-2 px-4 font-semibold border-b">{item.label}</td>
                    <td className="py-2 px-4 text-gray-600 border-b">{item.value}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const HealthBenefits = ({ benefits, title = "Health Benefits" }) => (
    <div className="text-left text-lg space-y-5 w-full lg:w-1/2">
        <h2 className="font-bold text-xl">{title}</h2>
        <ul className="list-disc list-inside">
            {benefits.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">{item}</li>
            ))}
        </ul>
    </div>
);

export default function Product({ params }) {
    const [productDetails, setProductDetails] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const bottomRef = useRef(null);

    React.useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            const { productName } = resolvedParams;
            setProductDetails(product[productName] || null);
            setIsLoading(false);
        }
        fetchParams();
    }, [params]);

    const handleScroll = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (isLoading) {
        return <div className="max-w-7xl mx-auto p-10 text-center">Loading...</div>;
    }

    if (!productDetails) {
        return <div className="max-w-7xl mx-auto p-10 text-center text-2xl">No product found</div>;
    }

    const {
        title,
        image,
        details,
        description,
        healthBenefits,
        healthBenefits2,
        description_2,
        description_3,
        description_4,
        description_5,
    } = productDetails;

    const descriptions = [description, description_2, description_3, description_4, description_5].filter(Boolean);

    return (
        <main>
            <section className="bg-[url('/assets/images/product-cover.jpg')] py-16 lg:py-16 bg-no-repeat bg-cover">
                <h1 className="px-4 mx-auto text-3xl md:text-4xl max-w-7xl text-center font-semibold text-black uppercase">
                    Products
                </h1>
            </section>
            <section>
                <div className="bg-white py-10 lg:py-16 p-4 mx-auto max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-center mb-8 lg:mb-16 capitalize lg:text-4xl inline-block relative before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">{title}</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className={`w-full ${details || healthBenefits ? "flex justify-center lg:w-1/2" : "max-w-md mx-auto"}`}>
                            <div className="p-4 border-2 border-gray-300 rounded-lg w-full">
                                <img src={image} alt={title} className="rounded-lg object-contain mx-auto w-full" />
                            </div>
                            {!details && (
                                <div className="text-center">
                                    <button
                                        onClick={handleScroll}
                                        className="mt-6 inline-block w-full md:w-auto px-20 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-900 transition"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            )}
                        </div>
                        {details && (
                            <div className="w-full lg:w-1/2">
                                <ProductTable details={details} />
                                <button
                                    onClick={handleScroll}
                                    className="mt-6 inline-block w-full lg:w-auto px-20 py-2 bg-primary text-white font-semibold rounded-full hover:bg-blue-900 transition"
                                >
                                    Inquire Now
                                </button>
                            </div>
                        )}
                        {healthBenefits && <HealthBenefits benefits={healthBenefits} />}
                    </div>
                    {descriptions.length > 0 && <ProductDescription descriptions={descriptions} />}
                    {healthBenefits2 && <HealthBenefits benefits={healthBenefits2} title="Additional Health Benefits" />}
                </div>
            </section>
            <div ref={bottomRef}>
                <ContactForm inquiryFor={title} />
            </div>
        </main>
    );
}
