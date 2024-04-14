import React from "react";
import AboutImage from "../assets/Aboutus.png";
import Footer from "../component/Footer";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900 md:-mt-10">
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Discover more about our mission, vision, and values.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={AboutImage}
              alt="About Us"
              className="w-full md:h-[25rem] max-w-lg mx-auto rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our mission is to provide a comprehensive platform where users can compare prices, ratings, reviews, and more from various websites when searching for a product. Users can also view images of each product and be redirected to the original website upon clicking on any product card.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our vision is to empower users with a comprehensive platform for comparing prices and other product details from various websites, enabling them to make informed purchasing decisions.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Values
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>User satisfaction & convenience</li>
              <li>Transparency & accuracy in product information</li>
              <li>Continuous improvement for user experience</li>
              <li>Dedication to reliable & efficient services</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
