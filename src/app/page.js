import SlickSlider from "@/components/Slider";
import Image from "next/image";
import Best from "../assets/icons/best-seller.svg"
import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const cardData = [
    {
      title: 'Quality Assurance',
      description:
        'Rigorous international standards ensure top quality for our spices, vegetables, agricultural products & much more.',
      image: Best,
      showSeparator: true,
    },
    {
      title: 'Competitive Pricing',
      description:
        'Pricing ensures competitive rates with efficient supply chain management for top-quality products.',
      image: Best,
      showSeparator: true,
    }, {
      title: 'Sustainable Practices',
      description:
        'Rigorous international standards ensure top quality for our spices, vegetables, agricultural products & much more.',
      image: Best,
      showSeparator: true,
    }, {
      title: 'Customer-Centric Approach',
      description:
        'Rigorous international standards ensure top quality for our spices, vegetables, agricultural products & much more.',
      image: Best,
      showSeparator: true,
    },
  ];
  return (
    <main>
      <div className="bg-[url('../assets/images/agriculture.jpg')] bg-no-repeat bg-cover bg-center py-56">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl lg:text-8xl">
              Textline Here
            </h1>
            <p className="text-sm mt-4 lg:text-base">
              At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality products to customers around the globe.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl font-bold">Product Range</h2>
          <p className="text-gray-600 mt-2">Authentic products, crafted for the world authentic products, crafted for the world authentic products, crafted for the world</p>
        </div>
        <SlickSlider />
      </div>
      <div className="relative bg-[url('../assets/images/shiping.jpg')] bg-no-repeat bg-cover bg-center before:absolute before:inset-0 before:bg-black/5 before:backdrop-blur-sm py-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h3 className="text-3xl lg:text-7xl">
            Import and export business
          </h3>
          <div className="space-y-3 mt-6">
            <p>
              At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality products to customers around the globe. With a deep understanding of India's rich cultural heritage and market, we source and export a wide range of products that meet international standards. From agricultural produce and spices to textiles and handicrafts, our extensive network ensures that we bring the finest Indian goods to the world.
              products that meet international standards. From agricultural produce and spices to textiles and handicrafts, our extensive network ensures that we bring the finest Indian goods to the world.
            </p>
            <p>
              At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality products to customers around the globe. With a deep understanding of India's rich cultural heritage and market, we source and export a wide range of products that meet international standards. From agricultural produce and spices to textiles and handicrafts, our extensive network ensures that we bring the finest Indian goods to the world.
            </p>
            <p>
              At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-11 px-32">
          {cardData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              showSeparator={item.showSeparator}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </main>

  );
}
