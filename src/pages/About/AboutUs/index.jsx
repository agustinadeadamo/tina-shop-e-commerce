import React from "react";
import ResponsiveMainContainer from "../../../components/ResponsiveMainContainer";

function AboutUs() {
  return (
    <section className=" px-4 pt-16">
      <ResponsiveMainContainer>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-700">
            Welcome to{" "}
            <span className="font-bold text-secondary">Tina Shop</span>, where
            fashion meets innovation and sustainability. Founded in{" "}
            <span className="font-bold text-secondary">2022</span>, our journey
            began with a simple yet powerful vision: to redefine the way people
            experience fashion by blending style, comfort, and ethics. We
            believe that what you wear is more than just clothing—it&apos;s an
            expression of who you are and what you stand for.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            At <span className="font-bold text-secondary">Tina Shop</span>, our
            mission is to empower individuals through thoughtfully designed
            apparel that not only looks good but also feels good. We are
            committed to creating fashion that is inclusive, sustainable, and
            timeless. Every piece in our collection is crafted with care, using
            high-quality materials and ethical manufacturing practices that
            respect both people and the planet.
          </p>
        </div>
      </ResponsiveMainContainer>
    </section>
  );
}

export default AboutUs;
