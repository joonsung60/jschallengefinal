const IMAGE_COUNT = 9;
const randomIndex = Math.floor(Math.random() * IMAGE_COUNT);

const bgImage = document.createElement("img");
bgImage.src = `img/${randomIndex}.jfif`;


document.body.appendChild(bgImage);

