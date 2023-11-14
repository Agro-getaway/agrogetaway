// // Dashboard.js

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const farmTypes = [
//   {
//     id: 1,
//     name: "Arable Farming",
//     images: [
//       "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
//       "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
//       // Add more images as needed
//     ],
//   },
//   // Add more farm types as needed
// ];

// const Dashboard = () => {
//   const slickSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <h1>Farm Types</h1>
//       <Slider {...slickSettings}>
//         {farmTypes.map((farmType) => (
//           <div key={farmType.id}>
//             <h3>{farmType.name}</h3>
//             <Slider {...slickSettings}>
//               {farmType.images.map((imageUrl, index) => (
//                 <div key={index}>
//                   <img
//                     src={imageUrl}
//                     alt={`${farmType.name} - ${index + 1}`}
//                     style={{
//                       maxWidth: "100%",
//                       margin: "0 10px", // Add margin for spacing between images
//                     }}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  {
    title: "Arable Farming",
    description: "Lorem ipsum",
    image:
      "https://media.istockphoto.com/id/1405435576/photo/sunny-plantation-with-growing-soya.webp?b=1&s=170667a&w=0&k=20&c=qRzk74gZEsajCyUCLY2mtEjay7-ynAmv7ZViIylr1lc=",
  },
  {
    title: "Livestock Farming",
    description: "Lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1686145546043-a847a2ff5741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmVzdG9jayUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
  },
  // Add more slides as needed
];

const Dashboard = () => {
  // Add CSS classes to the slider components
  const sliderClasses = {
    slider: "slider",
    previousButton: "previousButton",
    nextButton: "nextButton",
    buttonDisabled: "disabled",
    track: "track",
    slide: "slide",
    hidden: "hidden",
    previous: "previous",
    current: "current",
    next: "next",
    animateIn: "animateIn",
    animateOut: "animateOut",
  };

  return (
    <Slider classNames={sliderClasses}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Dashboard;
