import React from "react";
import IndustryIcon from "../../public/assets/icons/ship.svg"
import PlaneIcon from "../../public/assets/icons/message.svg"
import NewsIcon from "../../public/assets/icons/newspaper.svg"
import RecycleIcon from "../../public/assets/icons/recycle.svg"
import CommunicationIcon from "../../public/assets/icons/communication.svg"
import Image from "next/image";
const WhyChooseUs = () => {
    const features = [
        {
            icon: <Image alt="Industry icon" className="w-full h-full object-contain object-center" src={IndustryIcon} />,
            title: "Industry Excellence",
            description:
                "We set the standard for excellence by offering cutting-edge technology and unmatched quality in all our services.",
        },
        {
            icon: <Image alt="Newspaper icon" className="w-full h-full object-contain object-center" src={NewsIcon} />,
            title: "Skilled Professionals",
            description:
                "Our team consists of experienced professionals who are committed to delivering high-quality results tailored to your needs.",
        },
        {
            icon: <Image alt="Plane icon" className="w-full h-full object-contain object-center" src={PlaneIcon} />,
            title: "24/7 Dedicated Support",
            description:
                "Our round-the-clock customer support team is always ready to address your questions and ensure your satisfaction.",
        },
        {
            icon: <Image alt="Recycle icon" className="w-full h-full object-contain object-center" src={RecycleIcon} />,
            title: "Lifetime Free Updates",
            description:
                "Stay ahead with our commitment to offering free lifetime updates, ensuring you always benefit from the latest features and improvements.",
        },
    ];

    return (
        <section className="py-12 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">WHY CHOOSE US</h2>
                <p className="text-gray-700">
                    Discover why we are the preferred choice for countless clients around the world.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="grid grid-cols-1 gap-8 flex-1">
                    {features.slice(0, 2).map((feature, index) => (
                        <div
                            key={index}
                            className="gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl"
                        >
                            <div className="bg-blue-200 p-3 rounded-md w-14 h-14 flex justify-center items-center mb-3">{feature.icon}</div>
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

                <div className="grid grid-cols-1 gap-8 flex-1">
                    {features.slice(2, 4).map((feature, index) => (
                        <div
                            key={index}
                            className="gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl"
                        >
                            <div className="bg-blue-200 p-3 rounded-md w-14 h-14 flex justify-center items-center mb-2">{feature.icon}</div>
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
