import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import React from "react";

const Product = () => {
  const products = [
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
    {
      name: "Cumin",
      image: "/assets/images/cumin.jpg",
    },
    {
      name: "Cinnamon",
      image: "/assets/images/cinnamon.jpg",
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
      name: "White Sesame",
      image: "/assets/images/white-sesame.jpg",
    },
    {
      name: "Black Sesame",
      image: "/assets/images/black-sesame.jpg",
    },
    {
      name: "Soybean",
      image: "/assets/images/soybean.jpg",
    },
    {
      name: "Groundnuts",
      image: "/assets/images/groundnuts.jpg",
    },
    {
      name: "White Chickpeas",
      image: "/assets/images/white-chickpeas.jpg",
    },
    {
      name: "Brown Chickpeas",
      image: "/assets/images/brown-chickpeas.jpg",
    },
  ];
  const wholeSpices = [
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
      name: "Coriander",
      image: "/assets/images/coriander.jpg",
    },
    {
      name: "Onion Powder",
      image: "/assets/images/onion-powder.jpg",
    },
    {
      name: "Banana Powder",
      image: "/assets/images/banana-powder.jpg",
    },
    {
      name: "Wheat",
      image: "/assets/images/wheat.jpg",
    },
    {
      name: "Cotton",
      image: "/assets/images/cotton.jpg",
    },
    {
      name: "Cumin",
      image: "/assets/images/cumin.jpg",
    },
  ];
  const others = [
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
    {
      name: "Corn",
      image: "/assets/images/corn.jpg",
    },
  ];
  return (
    <main className="overflow-hidden">
      <section className="bg-[url('/assets/images/product-banner.jpg')] py-16 lg:py-16 bg-no-repeat bg-cover bg-center">
        <h1 className="px-4 mx-auto text-3xl md:text-4xl max-w-7xl text-center font-semibold text-black uppercase">
          out products
        </h1>
      </section>
      <section className="py-10 px-4 lg:py-16 mx-auto max-w-7xl">
        <div className="text-center">
          <h5 className="relative inline-block text-center uppercase text-black font-semibold text-3xl xl:text-4xl before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">
            ground spices
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 mt-12">
          {products.map((product, index) => (
            <Link className="hover:scale-105 duration-500" href={`/products/category/${product.name.trim().toLowerCase().replace(/\s+/g, '-')}`}
              key={index}>
              <div className="h-60 bg-white rounded-md overflow-hidden shadow-product border border-gray-500">
                <img
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
      <section className="pb-10 px-4 lg:pb-24  mx-auto max-w-7xl">
        <div className="text-center">
          <h5 className="relative inline-block text-center uppercase text-black font-semibold text-3xl xl:text-4xl before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">
            whole spices
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 mt-12">
          {wholeSpices.map((product, index) => (
            <Link className="hover:scale-105 duration-500" href={`/products/category/${product.name.trim().toLowerCase().replace(/\s+/g, '-')}`}
              key={index}>
              <div className="h-60 bg-white rounded-md overflow-hidden shadow-product border border-gray-500">
                <img
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
      <section className="pb-10 px-4 lg:pb-24  mx-auto max-w-7xl">
        <div className="text-center">
          <h5 className="relative inline-block text-center uppercase text-black font-semibold text-3xl xl:text-4xl before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">
            others
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14 mt-12">
          {others.map((product, index) => (
            <Link className="hover:scale-105 duration-500" href={`/products/category/${product.name.trim().toLowerCase().replace(/\s+/g, '-')}`}
              key={index}>
              <div className="h-60 bg-white rounded-md overflow-hidden shadow-product border border-gray-500">
                <img
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
