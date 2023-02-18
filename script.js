const container = document.querySelector(".container");
const fetchData = () =>
{
  fetch("https://free-food-menus-api-production.up.railway.app/burgers")
  .then((res) => res.json())
  .then((data) => 
  {
    console.log(data);
    container.innerHTML = data.map((burger)=>
    `<div class="card-burger">
     <div class="card-burger-id">
      <h2>${burger.id}</h2>
    </div>
    <img src= ${burger.img}  id="images" alt="#"/>
      <div class="card-burger-name">
      <h1>${burger.name}</h1>
      </div>
      <div class="card-burger-price">
      <h6> Price : ${burger.price}</h6>
      </div>
      <div class="card-burger-rating">
      <h6> Rating : ${burger.rate}</h6>
      </div>
      <div class="card-burger-dsc">
      <h6> Description : ${burger.dsc}</h6>
      </div>
      <div class="card-burger-country">
      <h6> Country : ${burger.country}</h6>
      </div>
      `
    );
  })
  .catch((err) => console.log(err));
};
fetchData();
