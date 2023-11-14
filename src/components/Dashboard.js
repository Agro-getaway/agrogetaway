// // Dashboard.js

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const farmTypes = [
//   {
//     id: 1,
//     name: "Arable Farming",
//     imageUrl:
//       "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
//   },
//   // Add more farm types as needed
// ];

// const Dashboard = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true, // Set to true for center mode
//     centerPadding: "0", // Adjust the center padding to reduce space
//   };

//   return (
//     <div>
//       <h1>Farm Types</h1>
//       <Slider {...settings}>
//         {farmTypes.map((farmType) => (
//           <div key={farmType.id}>
//             <h3>{farmType.name}</h3>
//             <img
//               src={farmType.imageUrl}
//               alt={farmType.name}
//               style={{ maxWidth: "auto", height: "auto" }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import ReactDOM from "react-dom";
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
        <image
          url="https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
          alt="Livestock Farming"
        />
        <p className="Farming">Livestock Farming</p>
      </div>
      <div>
        <image
          url="https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc="
          alt="Arable Farming"
        />
        <p className="Farming">Arable Farming</p>
      </div>
      {/* <div> */}
      {/* <img src="assets/2.jpeg" alt="Legend 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" alt="Legend 3" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" alt="Legend 4" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" alt="Legend 5" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" alt="Legend 6" />
        <p className="legend">Legend 6</p>
      </div> */}
    </Carousel>
  );
};

export default Dashboard;

ReactDOM.render(<Dashboard />, document.querySelector(".demo-carousel"));
