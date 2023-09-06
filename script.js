const sliderActionButtons = [...document.querySelectorAll("[data-action]")];
const sliderContainer = document.getElementById("slider-container");

const imagesUrl = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];
let imgIndex = 0;

function updateSliderIndex(action) {
  const lastImgIndex = imagesUrl.length - 1;

  if (action === "prev") {
    imgIndex = imgIndex > 0 ? --imgIndex : lastImgIndex;
  }

  if (action === "next") {
    imgIndex = imgIndex < lastImgIndex ? ++imgIndex : 0;
  }

  setSliderImg(imgIndex);
}

function setSliderImg(index) {
  sliderContainer.style.backgroundImage = `url(${imagesUrl[index]})`;
}

sliderActionButtons.forEach((btn) => {
  btn.addEventListener("click", () => updateSliderIndex(btn.dataset.action));
});
setSliderImg(imgIndex);
