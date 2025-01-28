import ContactForm from "@/components/ContactForm";
import React from "react";

const Product = () => {
  return (
    <main>
      <div className="relative">
        <section className="bg-[url('/assets/images/contact.jpg')] py-16 lg:py-16 bg-no-repeat bg-cover bg-center">
          <h1 className="invisible px-4 mx-auto text-3xl md:text-4xl max-w-7xl text-center font-semibold text-white uppercase">
            Contact us
          </h1>
        </section>
        <h1 className="absolute bg-black/45 inset-0 flex justify-center items-center text-center mx-auto text-3xl font-semibold text-white uppercase">
          Contact us
        </h1>
      </div>
      <ContactForm />
    </main >
  );
};

export default Product;
