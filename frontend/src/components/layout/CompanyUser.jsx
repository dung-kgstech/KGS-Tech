import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyUser = () => {
  return (
    <section id="Company">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Thương hiệu đối tác
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dtnuj2les/image/upload/v1735886228/kmslogo_l2fx2y.png"
                alt="Company Logo 1"
                className="w-auto h-24 object-contain"
              />
            </div>
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061342/DXC_Logo_mafe6j.png"
                alt="Company Logo 2"
                className="w-auto h-24 object-contain"
              />
            </div>
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dmwt6xlpf/image/upload/v1736061342/NEC_Logo_v0pwi4.png"
                alt="Company Logo 3"
                className="w-auto h-24 object-contain"
              />
            </div>
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dtnuj2les/image/upload/v1735886392/fpt-removebg-preview_dlhdq6.png"
                alt="Company Logo 4"
                className="w-auto h-24 object-contain"
              />
            </div>
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dtnuj2les/image/upload/v1735886392/hitachi-removebg-preview_geekow.png"
                alt="Company Logo 5"
                className="w-auto h-24 object-contain"
              />
            </div>
            <div className="flex justify-center border-2 border-gray-400 p-2">
              <img
                src="https://res.cloudinary.com/dtnuj2les/image/upload/v1735886392/vng-removebg-preview_sokbcl.png"
                alt="Company Logo 6"
                className="w-auto h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyUser;
