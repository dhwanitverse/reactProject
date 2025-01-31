import React from "react";
import FoodCategories from "./Foodcategories"; 
import FoodcategoriesUI from "./FoodcategoriesUI"; 

const Foodcategoriespage = () => {
  return (
    <>
      <h3 className="d-flex justify-content-center text-black">CheeseChake</h3>
      <div className="d-flex gap-3 justify-content-center mt-3">
        {FoodCategories.map((item, index) => (
          <FoodcategoriesUI
            key={index}
            imgSrc={item.imgSrc}
            altText={item.altText}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </>
  );
};

export default Foodcategoriespage;
