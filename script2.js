const messageContainer = document.getElementById("message-container");
const generateButton = document.getElementById("generate-button");
const imgElement = document.getElementById("img-element");
const body = document.getElementById("body")

function generateRandomImage(imageArray, imgElement) {
  // Get a random index from the image array
  const randomIndex = Math.floor(Math.random() * imageArray.length);

  // Get the random image URL from the array
  const randomImage = imageArray[randomIndex];

  // Update the `src` attribute of the image element with the correct path
  imgElement.src = randomImage;

  // Show the image (optional)
  imgElement.style.display = "flex"; // This ensures the image is displayed
  imgElement.style.width = "600px"; // Adjust the width as needed
  imgElement.style.height = "600px"; // Adjust the height as needed
  imgElement.style.objectFit = "cover"; // Maintain aspect ratio and cover the container
  // Move the elements up when the button is clicked
  imgElement.style.top = "100px";
  generateButton.style.top = "850px";
}

generateButton.addEventListener("click", () => generateRandomImage(imageArray, imgElement));

// Update the image array with the correct paths (adjust based on your setup)
const imageArray = [
  "Resources/Images/sadhguru.webp", // Assuming images are in the same folder as your HTML
  // OR (if your HTML is in a subfolder)
  // "Resources/Images/sadhguru.webp",
  "Resources/Images/osho.jpg",
  "Resources/Images/guruGobind.jpg",
  "Resources/Images/yogananda.jpg",
];