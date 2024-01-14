const galleryImages = document.querySelector(".gallery-images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentImageIndex = 0;
const imageWidth = galleryImages.querySelector("img").clientWidth;

prevButton.addEventListener("click", () => {
  currentImageIndex--;
  slideImages();
});

nextButton.addEventListener("click", () => {
  currentImageIndex++;
  slideImages();
});

function slideImages() {
  const totalImages = galleryImages.querySelectorAll("img").length;
  console.log(imageWidth);
  if (currentImageIndex < 0) {
    currentImageIndex = totalImages - 1;
  } else if (currentImageIndex >= totalImages) {
    currentImageIndex = 0;
  }

  const translateX = -currentImageIndex * imageWidth;
  galleryImages.style.transform = `translateX(${translateX}px)`;
}

function openFullscreen(image) {
  const lightboxImage = document.querySelector(".lightbox img");
  lightboxImage.src = image.src; // Replace with your naming convention
  document.querySelector(".lightbox").hidden = false;
  // Add code to make the lightbox image full screen (using Fullscreen API or other methods)
}

document.querySelector(".lightbox").addEventListener("click", () => {
  document.querySelector(".lightbox").hidden = true;
});

//rooms
let roomimages = {
  singleRoom: [
    "../assets/amenities/parking.png",
    "../assets/amenities/enentSpace.jpeg",
    "../assets/amenities/evening.jpg",
  ],
  doubleRoom: [
    "../assets/amenities/enentSpace.jpeg",
    "../assets/amenities/parking.png",
    "../assets/amenities/evening.jpg",
  ],
  deluxRoom: [
    "../assets/amenities/evening.jpg",
    "../assets/amenities/parking.png",
    "../assets/amenities/tent.jpeg",
  ],
  tentRoom: [
    "../assets/amenities/tent.jpeg",
    "../assets/amenities/enentSpace.jpeg",
    "../assets/amenities/evening.jpg",
  ],
};

const prevButtonRoom = document.querySelector(".prev-button-room");
const nextButtonRoom = document.querySelector(".next-button-room");
let cardTitle;
const lightboxImage = document.querySelector(".room-images img");
function changeImage(/*currentIndex, lightboxImage,*/ cardTitle /*rooms*/) {
  if (cardTitle === "Single Room") {
    totalImages = roomimages.singleRoom.length;
    if (currentImageIndex < 0) {
      currentImageIndex = totalImages - 1;
    } else if (currentImageIndex >= totalImages) {
      currentImageIndex = 0;
    }
    lightboxImage.src = roomimages.singleRoom[currentImageIndex];
  }
  if (cardTitle === "Double Room Cottege") {
    totalImages = roomimages.doubleRoom.length;
    if (currentImageIndex < 0) {
      currentImageIndex = totalImages - 1;
    } else if (currentImageIndex >= totalImages) {
      currentImageIndex = 0;
    }
    lightboxImage.src = roomimages.doubleRoom[currentImageIndex];
  }
  if (cardTitle === "Delux Room") {
    totalImages = roomimages.deluxRoom.length;
    if (currentImageIndex < 0) {
      currentImageIndex = totalImages - 1;
    } else if (currentImageIndex >= totalImages) {
      currentImageIndex = 0;
    }
    lightboxImage.src = roomimages.deluxRoom[currentImageIndex];
  }
  if (cardTitle === "Tent") {
    totalImages = roomimages.tentRoom.length;
    if (currentImageIndex < 0) {
      currentImageIndex = totalImages - 1;
    } else if (currentImageIndex >= totalImages) {
      currentImageIndex = 0;
    }
    lightboxImage.src = roomimages.tentRoom[currentImageIndex];
  }
}

prevButtonRoom.addEventListener("click", () => {
  currentImageIndex--;
  changeImage(cardTitle.textContent);
});

nextButtonRoom.addEventListener("click", () => {
  currentImageIndex++;
  changeImage(cardTitle.textContent);
});
function viewRooms(data) {
  cardTitle = data.querySelector(".card-title");
  if (cardTitle.textContent === "Single Room")
    lightboxImage.src = roomimages.singleRoom[currentImageIndex];
  else if (cardTitle.textContent === "Double Room Cottege")
    lightboxImage.src = roomimages.doubleRoom[currentImageIndex];
  else if (cardTitle.textContent === "Delux Room")
    lightboxImage.src = roomimages.deluxRoom[currentImageIndex];
  else if (cardTitle.textContent === "Tent")
    lightboxImage.src = roomimages.tentRoom[currentImageIndex];

  document.querySelector(".rooms-lightbox").hidden = false;
}
document.querySelector(".close-modal").addEventListener("click", () => {
  currentImageIndex = 0;
  document.querySelector(".rooms-lightbox").hidden = true;
});

//scroll to view
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
