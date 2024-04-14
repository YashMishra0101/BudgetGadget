import React from "react";
import Aboutimage from "../assets/Aboutus.png";
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
              src={Aboutimage}
              alt="About Us"
              className="w-full md:h-[25rem] max-w-lg mx-auto rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In our website, when searching for a product name, we can compare
              it from around 100 different websites for its price, rating,
              reviews, and much more. Images of each product are also displayed.
              Moreover, upon clicking on any product in the rectangular card,
              users can be redirected to the original website.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In our website, our vision is to provide users with a
              comprehensive platform to compare prices and other details of
              products from various websites, ensuring they make informed
              purchasing decisions.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Our Values
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>User satisfaction & convenience</li>
              <li>Transparency & accuracy in product info</li>
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
