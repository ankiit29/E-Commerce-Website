import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => handleCategoryClick(item.id)}
          >
            <img
              src={
                process.env.REACT_APP_STRIPE_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt="category"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
