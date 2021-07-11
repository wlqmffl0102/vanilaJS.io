const bgimage = document.querySelector("body");
const image = ['0.jpg','1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg']

function RandomBgImage() {
    let randomNumber = Math.floor(Math.random() * image.length);
  
    bgimage.style.backgroundImage = `url('../img/${image[randomNumber]}')`;
  }

RandomBgImage();