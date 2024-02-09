
// Callbacks

// document.addEventListener("DOMContentLoaded", (e) => {
  //CALL JSON AND
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramen) => {
      console.log(ramen);
      ramen.forEach(ramenPictures);
    });
// });

// click Listener for the Menu
function ramenPictures(images) {
  let ramenDisplayNav = document.querySelector("#ramen-menu");
  let ramenImg = document.createElement("img");
  ramenImg.src = images.image;
  ramenImg.alt = images.name;
  ramenImg.classList.add("image-nav");
  ramenImg.addEventListener("click", () => {
    ramenDetails(images);
  });
  ramenDisplayNav.append(ramenImg);
}

//Calling the data for the selected menu item
function ramenDetails(ramen) {
  let detailImage = document.querySelector(".detail-image");
  let nameElement = document.querySelector(".name");
  let restaurantElement = document.querySelector(".restaurant");
  let ratingElement = document.querySelector("#rating-display")
  let commentElement = document.querySelector("#comment-display")

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingElement.textContent = ramen.rating;
  commentElement.textContent = ramen.comment;

  // document.getElementById("rating-display").textContent = ramen.rating; 
  // document.getElementById("comment-display").textContent = ramen.comment; 
}

// New Ramen form w/ callBack
let form = document.getElementById("new-ramen"); 
const handleSubmit = (e) => { 
  e.preventDefault();
  
  console.log(e);

  let newRamenSub = {
    // id: e.target[0],
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  }; 

  fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newRamenSub),
  })
  .then((res) => {
    if (res.status === 201) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);
    window.location.reload();
  });
};

form.addEventListener("submit", e => {
  handleSubmit(e);
  console.log(e);
});

