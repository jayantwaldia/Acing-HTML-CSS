const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const imgArr = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];

/* Looping through images */
for (const image of imgArr) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", image);
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
