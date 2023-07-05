let slidersImages = document.getElementsByClassName('slider__img');
let mainImage = document.getElementById('main__img');

function doMainImage (image) {
    mainImage.src = image
}

for(let i = 0; i < slidersImages.length; i++) {
    slidersImages[i].addEventListener('click', () => doMainImage(slidersImages[i].src))
}