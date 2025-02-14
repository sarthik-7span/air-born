import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import React from "react";

const Product = ({ params }) => {
    const whole_spices = [
        {
            name: "Whole Chili",
            image: "/assets/images/whole-chili.jpg",
        },
        {
            name: "Turmeric",
            image: "/assets/images/turmeric.jpg",
        },
        {
            name: "Cloves",
            image: "/assets/images/cloves.jpg",
        },
        {
            name: "Black Pepper",
            image: "/assets/images/black-pepper.jpg",
        },
        {
            name: "Dry Ginger",
            image: "/assets/images/dry-ginger.jpg",
        },
        {
            name: "Star Anise",
            image: "/assets/images/star-anise.jpg",
        },
    ];

    const ground_spices = [
        {
            name: "Chili Powder",
            image: "/assets/images/chili-powder.jpg",
        },
        {
            name: "Cumin Powder",
            image: "/assets/images/cumin-powder.jpg",
        },
        {
            name: "Coriander Powder",
            image: "/assets/images/coriander-powder.jpg",
        },
        {
            name: "Turmeric Powder",
            image: "/assets/images/turmeric-powder.jpg",
        },
        {
            name: "Ginger Powder",
            image: "/assets/images/ginger-powder.jpg",
        },
        {
            name: "Garlic Powder",
            image: "/assets/images/garlic-powder.jpg",
        },
        {
            name: "Cinnamon",
            image: "/assets/images/cinnamon.jpg",
        },
        {
            name: "Onion Powder",
            image: "/assets/images/onion-powder.jpg",
        },
        {
            name: "Banana Powder",
            image: "/assets/images/banana-powder.jpg",
        },
    ];

    const seeds = [
        {
            name: "Cumin",
            image: "/assets/images/cumin.jpg",
        },
        {
            name: "White Sesame",
            image: "/assets/images/white-sesame.jpg",
        },
        {
            name: "Black Sesame",
            image: "/assets/images/black-sesame.jpg",
        },
        {
            name: "Coriander",
            image: "/assets/images/coriander.jpg",
        },
    ];

    const millets_and_grains = [
        {
            name: "Wheat",
            image: "/assets/images/wheat.jpg",
        },
        {
            name: "Cotton",
            image: "/assets/images/cotton.jpg",
        },
        {
            name: "Basmati Rice",
            image: "/assets/images/basmati-rices.jpg",
        },
        {
            name: "Non-Basmati Rice",
            image: "/assets/images/non-basmati-rice.jpg",
        },
        {
            name: "Groundnuts",
            image: "/assets/images/groundnuts.jpg",
        },
        {
            name: "Corn",
            image: "/assets/images/corn.jpg",
        },
        {
            name: "Soybean",
            image: "/assets/images/soybean.jpg",
        },
    ];

    const pulses = [
        {
            name: "White Chickpeas",
            image: "/assets/images/white-chickpeas.jpg",
        },
        {
            name: "Brown Chickpeas",
            image: "/assets/images/brown-chickpeas.jpg",
        },
    ];

    const vegetables = [
        {
            name: "Carrot",
            image: "/assets/images/carrot.jpg",
        },
        {
            name: "Garlic",
            image: "/assets/images/garlic.jpg",
        },
        {
            name: "Potato",
            image: "/assets/images/potato.jpg",
        },
        {
            name: "Tomato",
            image: "/assets/images/tomato.jpg",
        },
        {
            name: "Onion",
            image: "/assets/images/onion.jpg",
        },
        {
            name: "Cabbage",
            image: "/assets/images/cabbage.jpg",
        },
    ];

    const fruits = [
        {
            name: "Mango",
            image: "/assets/images/mango.jpg",
        },
        {
            name: "Banana",
            image: "/assets/images/banana.jpg",
        },
        {
            name: "Orange",
            image: "/assets/images/orange.jpg",
        },
        {
            name: "Pineapple",
            image: "/assets/images/pineapple.jpg",
        },
        {
            name: "Watermelon",
            image: "/assets/images/watermelon.jpg",
        },
    ];

    const categories = {
        "whole-spices": whole_spices,
        "ground-spices": ground_spices,
        seeds: seeds,
        "millets-and-grains": millets_and_grains,
        pulses: pulses,
        vegetables: vegetables,
        fruits: fruits,
    };

    const selectedCategory = params.category;
    const products = categories[selectedCategory] || [];
    if (products.length === 0) {
        return <div className="max-w-7xl mx-auto p-10 text-center text-2xl">No product found</div>;

    }
    return (
        <main>
            <section className="bg-[url('/assets/images/product-banner.jpg')] py-10 bg-no-repeat bg-cover bg-center">
                <h1 className="px-4 mx-auto text-3xl max-w-7xl text-center font-semibold text-black uppercase">
                    Our Products
                </h1>
            </section>
            <section className="py-10 px-4 lg:py-14 mx-auto max-w-7xl">
                <div className="text-center">
                    <h5 className="relative inline-block text-center mb-8 lg:mb-14 uppercase text-black font-semibold text-3xl xl:text-4xl before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">
                        {selectedCategory.replace(/-/g, " ")}
                    </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14">
                    {products.map((product, index) => (
                        <Link className="hover:scale-105 duration-500"
                            href={`/products/${selectedCategory}/${product.name
                                .trim()
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            key={index}
                        >
                            <div className="h-60 bg-white rounded-md overflow-hidden shadow-product border border-gray-500">
                                <img loading="lazy"
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h6 className="text-base xl:text-xl text-center mt-4 font-semibold">
                                {product.name}
                            </h6>
                        </Link>
                    ))}
                </div>
            </section>
            <ContactForm />
        </main>
    );
};

export default Product;
