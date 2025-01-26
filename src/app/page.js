import SlickSlider from "@/components/Slider";
import Image from "next/image";
import Best from "../../public/assets/icons/best-seller.svg";
import PriceTag from "../../public/assets/icons/price-tag.svg";
import Energy from "../../public/assets/icons/renewable-energy.svg";
import Insight from "../../public/assets/icons/customer-insights.svg";
import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";
import underline from "../../public/assets/icons/underline.png"
import BrandSlider from "@/components/BrandSlider";
import CoverSlider from "@/components/CoverSlider";
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
      image: PriceTag,
      showSeparator: true,
    }, {
      title: 'Sustainable Practices',
      description:
        'Rigorous international standards ensure top quality for our spices, vegetables, agricultural products & much more.',
      image: Energy,
      showSeparator: true,
    }, {
      title: 'Customer-Centric Approach',
      description:
        'Rigorous international standards ensure top quality for our spices, vegetables, agricultural products & much more.',
      image: Insight,
      showSeparator: true,
    },
  ];
  return (
    <main>
      <CoverSlider />
      <div className="relative md:bg-[url('/assets/images/map-bg.jpg')] bg-100-auto bg-bottom bg-no-repeat py-11 lg:py-16 before:content-['*'] before:absolute before:inset-0 before:bg-gray-50/70 before:blur-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center relative z-10 text-black">
          <div className="relative block text-2xl mb-10 text-left font-semibold text-black">
            Original & Trusted
            <Image src={underline} className="w-52" alt="underline icon" />
          </div>
          <h3 className="text-xl lg:leading-normal sm:text-4xl lg:text-6xl font-bold">
            Your Trusted Partner in Bringing
            Authentic Indian Goods to the World
          </h3>
          <div className="space-y-3 mt-6 lg:mt-20 text-sm lg:text-base">
            <h6 className="font-bold text-base sm:text-xl lg:text-3xl mb-6 md:mb-10">
              You Deserve Quality. <br />
              We Deliver Excellence Across Industries Worldwide.
            </h6>
            <div className="font-medium text-sm space-y-4 lg:text-xl lg:space-y-8 italic">
              <p>
                At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality products to customers around the globe. With a deep understanding of India's rich cultural heritage and market, we source and export a wide range of products that meet international standards. From agricultural produce and spices to textiles and handicrafts, our extensive network ensures that we bring the finest Indian goods to the world.</p>
              <p>
                Our commitment to quality and customer satisfaction drives us to continuously strive for excellence in every aspect of our business. We believe in building strong, lasting relationships with our clients by providing reliable service, competitive pricing, and timely delivery.
              </p>
              <p>
                Join us as we connect the world to India's vibrant and varied offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold inline-block relative before:content-[''] before:block before:w-12 md:before:w-16 before:h-[2px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-16 after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">Product Range</h3>
          </div>
          <p className="text-black mt-5 uppercase">Authentic products, crafted for the world</p>
        </div>
        <div className="mx-auto max-w-7xl">
          <SlickSlider />
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl py-11 md:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:px-32">
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
      <div className="py-10">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold capitalize text-center mb-12 lg:mb-16 inline-block relative before:content-[''] before:block before:w-12 md:before:w-16 before:h-[2px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-16 after:h-[2px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">our certificates
          </h3>
        </div>
        <BrandSlider />
      </div>
      <ContactForm />
    </main >

  );
}
