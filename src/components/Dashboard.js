// CarouselComponent.js
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Dashboard = () => {
  const onChange = (index, item) => {
    // Handle carousel change
  };

  const onClickItem = (index, item) => {
    // Handle click on carousel item
  };

  const onClickThumb = (index, item) => {
    // Handle click on carousel thumbnail
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>{" "}
      <div>
        <img
          src="https://www.vecteezy.com/photo/29278046-chicken-farm-for-growing-broiler-chickens-to-the-age-of-one-and-a-half-months-ai-generative"
          alt="Poultry"
          width="100px"
          Height="100px"
        />
        <p className="Farming Methods">Poultry</p>
      </div>
    </Carousel>
  );
};

export default Dashboard; // Replace 'root' with your root element ID
