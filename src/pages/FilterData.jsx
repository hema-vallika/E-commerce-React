import React from "react";
import { useSelector } from "react-redux";
import Productcard from "../components/Productcard";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filterData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center shadow-md">
            Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer ">
            {filterProducts.map((product) => (
              <Productcard product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://thegioicongnghiep.org/images/no-magento-product-found.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default FilterData;
