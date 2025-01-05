'use client';

import React, { useRef } from "react";
import ContactForm from "@/components/ContactForm";
import product from "@/data/products.json";

const ProductDescription = ({ descriptions }) => (
    <div className="text-left md:text-center text-lg space-y-5 mt-12 lg:mt-20">
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
    const bottomRef = useRef(null);

    React.useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            const { productName } = resolvedParams;
            setProductDetails(product[productName] || null);
        }
        fetchParams();
    }, [params]);

    const handleScroll = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!productDetails) {
        return <div className="max-w-7xl mx-auto p-10 text-center">Loading...</div>;
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
            <section className="bg-[url('/assets/images/product-cover.jpg')] py-24 md:py-36 bg-no-repeat bg-cover">
                <h1 className="px-4 mx-auto text-3xl md:text-4xl max-w-7xl text-center font-semibold text-black uppercase">
                    Products
                </h1>
            </section>
            <section>
                <div className="bg-white py-10 p-4 mx-auto max-w-7xl">
                    <h1 className="text-2xl font-bold text-center mb-6 capitalize">{title}</h1>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        <div className={`w-full ${details || healthBenefits ? "lg:w-1/2" : "max-w-3xl mx-auto"} flex justify-center`}>
                            <div className="p-4 border-2 border-gray-300 rounded-lg w-full">
                                <img src={image} alt={title} className="rounded-lg object-contain mx-auto" />
                            </div>
                        </div>
                        {details && (
                            <div className="w-full lg:w-1/2">
                                <ProductTable details={details} />
                                <button
                                    onClick={handleScroll}
                                    className="mt-6 w-full py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition"
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
