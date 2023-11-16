// Sample data of arable farms in Uganda
const farms = [
  { name: "Farm 1", location: "Location 1", image: "farm1.jpg" },
  { name: "Farm 2", location: "Location 2", image: "farm2.jpg" },
  { name: "Farm 3", location: "Location 3", image: "farm3.jpg" },
  // Add more farms as needed
];

// Function to create farm cards and display them on the page
function Farms() {
  const farmContainer = document.getElementById("farm-container");

  farms.forEach((farm) => {
    // Create a card for each farm
    const farmCard = document.createElement("div");
    farmCard.classList.add("farm-card");

    // Add farm name
    const farmName = document.createElement("h2");
    farmName.textContent = farm.name;

    // Add farm location
    const farmLocation = document.createElement("p");
    farmLocation.textContent = `Location: ${farm.location}`;

    // Add farm image
    const farmImage = document.createElement("img");
    farmImage.src = farm.image;
    farmImage.alt = farm.name;

    // Append elements to the farm card
    farmCard.appendChild(farmName);
    farmCard.appendChild(farmLocation);
    farmCard.appendChild(farmImage);

    // Append the farm card to the container
    farmContainer.appendChild(farmCard);
  });
}

export default Farms;
// Call the displayFarms function when the page loads
window.onload = Farms;
