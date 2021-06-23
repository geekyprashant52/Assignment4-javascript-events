console.log("Script Loaded!");

let smallImagesWrapper = document.getElementById("images-wrapper");

const productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

let changePreviewImage = (url) => {
  document.getElementById("preview-img").src = url;
};

let addProductDetails = (name, brand, price, desc) => {
  document.getElementById("product-heading").innerHTML = name;
  document.getElementById("product-brand").innerHTML = brand;
  document.getElementById("price").innerHTML = price;
  document.getElementById("product-description").innerHTML = desc;
};

let createSmallImages = (url, pos) => {
  let mainDiv = document.createElement("div");
  mainDiv.className = "select-div";
  let images = document.createElement("img");
  images.className = "select-img";
  images.src = url;
  mainDiv.addEventListener("click", () => {
    //console.log("cards clicked at pos: " + pos);
    for (let i = 0; i < cardsArr.length; i++) {
      if (pos === i) {
        cardsArr[i].classList.add("select-div-border");
        changePreviewImage(url);
      } else {
        cardsArr[i].classList.remove("select-div-border");
      }
    }
  });
  mainDiv.appendChild(images);
  smallImagesWrapper.appendChild(mainDiv);
};

let createCardsDynamically = () => {
  productData.photos.map((item, pos) => {
    //console.log(item);
    createSmallImages(item, pos);
  });
};

createCardsDynamically();
let cardsArr = document.getElementsByClassName("select-div");
cardsArr[0].classList.add("select-div-border");
addProductDetails(
  productData.name,
  productData.brand,
  productData.price,
  productData.description
);
