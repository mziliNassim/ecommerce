import React from "react";

const About = () => {
  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
      <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to our e-commerce platform! Our mission is to provide
            high-quality products at competitive prices, making online shopping
            simple, secure, and enjoyable.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            We pride ourselves on offering a diverse range of products for
            everyone, ensuring exceptional customer service and a seamless
            shopping experience.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Thank you for choosing us! If you have any questions or feedback,
            feel free to{" "}
            <a
              href="/contact"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              contact us
            </a>
            .
          </p>
          <div className="mt-8 text-center">
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
