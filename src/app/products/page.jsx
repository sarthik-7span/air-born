import ContactForm from "@/components/ContactForm";
import React from "react";

const Product = () => {
  const products = [
    "Chilli Powder",
    "Turmeric Powder",
    "Coriander Powder",
    "Ginger Powder",
    "Garlic Powder",
    "Onion Powder",
    "Banana Powder",
    "Wheat",
    "Cotton",
    "Cumin",
  ]; // Array of random titles

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('https://picsum.photos/1900/300/?blur')] py-24 md:py-36 bg-no-repeat bg-cover bg-center">
        <h1 className="px-4 mx-auto text-3xl md:text-5xl max-w-7xl text-center font-semibold text-black uppercase">
          OUR PRODUCTS
        </h1>
      </section>

      {/* Products Section */}
      <section className="py-10 px-4 lg:py-24 2xl:px-24">
        <h5 className="text-center uppercase text-black font-semibold text-3xl md:text-4xl">
          GROUND SPICES
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 lg:gap-10 mt-12">
          {products.map((product, index) => (
            <div key={index}>
              <div>
                <img
                  src="https://picsum.photos/seed/picsum/400/400"
                  alt={product}
                  className="w-full h-full"
                />
              </div>
              <h6 className="text-base xl:text-xl text-center mt-4 font-semibold">
                {product}
              </h6>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default Product;
