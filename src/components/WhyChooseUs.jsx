import React from "react";
import ExpertIcon from "../../public/assets/icons/ship.svg"
import MessageIcon from "../../public/assets/icons/message.svg"
import QualityIcon from "../../public/assets/icons/quality.svg"
import NewsIcon from "../../public/assets/icons/newspaper.svg"
import PricingIcon from "../../public/assets/icons/recycle.svg"
import CommunicationIcon from "../../public/assets/icons/communication.svg"
import Image from "next/image";
const WhyChooseUs = () => {
    const features = [
        {
            icon: <Image alt="Industry icon" className="w-full h-full object-contain object-center" src={ExpertIcon} />,
            title: "Expertise",
            description:
                "We bring years of experience and in-depth knowledge of Indian exports, ensuring smooth international transactions.",
        },
        {
            icon: <Image alt="Quality icon" className="w-full h-full object-contain object-center" src={QualityIcon} />,
            title: "Quality",
            description:
                "Our products undergo stringent quality checks to meet international standards.",
        },
        {
            icon: <Image alt="Certificate icon" className="w-full h-full object-contain object-center" src={NewsIcon} />,
            title: "Certifications",
            description:
                "As a fully certified exporter in India with comprehensive export licenses, we are trusted by businesses worldwide.",
        },
        {
            icon: <Image alt="Recycle icon" className="w-full h-full object-contain object-center" src={PricingIcon} />,
            title: "Competitive Pricing",
            description:
                "We provide exceptional value, balancing quality and affordability.",
        },
    ];

    return (
        <section className="py-12 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <div className="text-center">
                    <h3 className="text-3xl font-bold uppercase text-black mb-4 inline-block relative before:content-[''] before:block before:w-12 md:before:w-14 before:h-[1px] before:bg-primary before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[103%] after:content-[''] after:block after:w-12 md:after:w-14 after:h-[1px] after:bg-primary after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[103%]">WHY CHOOSE US</h3>
                </div>
                <div className="text-gray-700 flex gap-2 justify-center items-center">
                    <div className="w-6 h-6 flex justify-center items-center">
                        <Image alt="message icon" className="w-full h-full object-contain object-center" src={MessageIcon} />
                    </div>
                    24/7 Dedicated Support
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 flex-1">
                    {features.slice(0, 2).map((feature, index) => (
                        <div
                            key={index}
                            className="gap-4 shadow-card p-4 bg-white rounded-lg hover:shadow-xl"
                        >
                            <div className="bg-blue-200 p-3 rounded-md w-14 h-14 flex justify-center items-center mb-3 -mt-8">{feature.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:block flex-1">
                    <Image alt="Communication" src={CommunicationIcon} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 flex-1">
                    {features.slice(2, 4).map((feature, index) => (
                        <div
                            key={index}
                            className="gap-4 shadow-card p-4 bg-white rounded-lg hover:shadow-xl"
                        >
                            <div className="bg-blue-200 p-3 rounded-md w-14 h-14 flex justify-center items-center mb-2 -mt-8">{feature.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
