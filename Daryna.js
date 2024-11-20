// Масив із посиланнями на зображення
const images = [
  'https://w7.pngwing.com/pngs/578/296/png-transparent-mercedes-benz-sprinter-mercedes-benz-a-class-car-mercedes-angle-emblem-trademark.png',
  'https://e7.pngegg.com/pngimages/471/474/png-clipart-toyota-logo-car-logo-toyota-icons-logos-emojis-car-logos.png',
  'https://w7.pngwing.com/pngs/575/243/png-transparent-2015-audi-a6-car-logo-desktop-audi-text-trademark-audi.png',
  'https://w7.pngwing.com/pngs/771/897/png-transparent-mazda-hd-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Citroen-logo-2009.png',
  'https://e7.pngegg.com/pngimages/392/784/png-clipart-chevrolet-omega-chevrolet-s-10-blazer-logo-2013-chevrolet-cruze-chevrolet-angle-emblem.png',
  'https://w7.pngwing.com/pngs/204/399/png-transparent-range-rover-sport-jaguar-land-rover-rover-company-land-rover-discovery-land-rover-emblem-label-trademark.png',
  'https://img2.freepng.ru/20180804/gvt/465c7bf4735729693f2f5bc39c5ea31c.webp',
  'https://img2.freepng.ru/20180712/aup/aawzmaanf.webp'
];

// Елементы
const imageList = document.getElementById('image-list');
const mainImage = document.getElementById('main-image');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const borderInput = document.getElementById('border');
const altInput = document.getElementById('alt');
const applyChangesButton = document.getElementById('apply-changes');

// Добавление списка изображений
images.forEach((image, index) => {
  const li = document.createElement('li');
  li.textContent = `Зображення ${index + 1}`;
  li.style.cursor = 'pointer';
  li.addEventListener('click', () => {
    mainImage.src = image;
    mainImage.alt = `Зображення ${index + 1}`;
    altInput.value = `Зображення ${index + 1}`;
  });
  imageList.appendChild(li);
});

// Применение изменений
applyChangesButton.addEventListener('click', () => {
  mainImage.width = widthInput.value || 300;
  mainImage.height = heightInput.value || 200;
  mainImage.style.borderWidth = `${borderInput.value || 2}px`;
  mainImage.alt = altInput.value || 'Зображення';
});
