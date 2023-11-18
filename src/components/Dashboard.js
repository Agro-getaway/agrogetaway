import React from "react";
import "react-animated-slider/build/horizontal.css";
import { useNavigate } from "react-router-dom";
import { FarmSection, SchoolSection } from "./styles";

// const EventsSection = () => (
//   <section style={eventsSectionStyle}>
//     <h1>Events</h1>
//     <strong>COMING SOON...</strong>
//     {/* Add your events content here */}
//   </section>
// );

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <SchoolSection />
      <FarmSection navigate={navigate} />
    </>
  );
}

export default Dashboard;
