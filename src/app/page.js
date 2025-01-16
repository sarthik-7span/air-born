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
import testimonialProfile from "../../public/assets/images/Rectangle1.jpg"
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
      <div className="bg-[url('/assets/images/high-angle-asian.jpg')] bg-no-repeat bg-cover bg-center py-20 lg:py-64">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="md:w-2/3 xl:w-1/2 text-black">
            <h1 className="text-4xl font-semibold lg:text-7xl">
              Textline Here
            </h1>
            <p className="text-sm mt-4 lg:text-2xl">
              At Airborne Export, we take pride in being a leading merchant-based exporter, delivering the best of India's diverse and high-quality products to customers around the globe.
            </p>
          </div>
        </div>
      </div>
      <div className="relative md:bg-[url('/assets/images/map-bg.jpg')] bg-100-auto bg-bottom bg-no-repeat py-11 lg:py-16">
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
            <div className="font-medium text-sm space-y-4 lg:text-2xl lg:space-y-8">
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
        <div className="text-center mb-10 md:mb-20 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Product Range</h2>
          <p className="text-black mt-5 uppercase">Authentic products, crafted for the world</p>
        </div>
        <SlickSlider />
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
      <div className="py-12">
        <BrandSlider />
      </div>
      <div className="max-w-7xl mx-auto p-4 py-10 text-center">
        <p className="text-base text-black mb-4 uppercase">Our Testimonials</p>
        <h2 className="text-black text-3xl md:text-4xl font-bold">What They Are Talking About</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
          <div className="flex-shrink-0 relative w-52 h-52 rounded-full overflow-hidden shadow-md">
            <Image
              src={testimonialProfile}
              alt="Customer Image"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 left-0 w-6 h-6 bg-gray-200 rounded-full transform -translate-x-2 -translate-y-2"></span>
          </div>
          <div className="w-full text-left">
            <p className="text-lg text-gray-700">
              Contant here
            </p>
            <h3 className="text-xl font-semibold text-black mt-4">Tirup Vaghasiya</h3>
            <p className="text-base text-grtext-blackay-500">Customer</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </main >

  );
}
