'use strict';

let productArray = [];
let votingRounds = 25;

function Products(name, fileExt = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExt}`;
  this.votes = 0;
  this.views = 0;
}

let displayContainer = document.getElementById('displayImages');
let imgOne = document.getElementById('img1');
let imgTwo = document.getElementById('img2');
let imgThree = document.getElementById('img3');
let button = document.getElementById('btn');
let results = document.getElementById('displayResults');

// function randomImage(){
//   return Math.floor(Math.random() * productArray.length);
// }

function showImage(){
  let imgOneDisplay = Math.floor(Math.random() * productArray.length);
  let imgTwoDisplay = Math.floor(Math.random() * productArray.length);
  let imgThreeDisplay = Math.floor(Math.random() * productArray.length);

  while(imgOneDisplay === imgTwoDisplay || imgTwoDisplay === imgThreeDisplay || imgThreeDisplay === imgOneDisplay){
    imgOneDisplay = showImage();
    imgTwoDisplay = showImage();
    imgThreeDisplay = showImage();

    imgOne.src = productArray[showImage()].img;
    imgTwo.src = productArray[showImage()].img;
    imgThree.src = productArray[showImage()].img;
  }
  // while(imgOneDisplay === imgTwoDisplay){
  //   imgTwoDisplay = randomImage();
  // }
  // while(imgThreeDisplay === imgTwoDisplay || imgThreeDisplay === imgOneDisplay){
  //   imgThreeDisplay = randomImage();
  // }

  // showImage();

  imgOne.src = productArray[imgOneDisplay].image;
  imgOne.title = productArray[imgOneDisplay].name;
  imgOne.alt = `This is an image of a product called ${productArray[imgOneDisplay].name}`;
  imgTwo.src = productArray[imgTwoDisplay].image;
  imgTwo.title = productArray[imgTwoDisplay].name;
  imgTwo.alt = `This is an image of a product called ${productArray[imgTwoDisplay].name}`;
  imgThree.src = productArray[imgThreeDisplay].image;
  imgThree.title = productArray[imgThreeDisplay].name;
  imgThree.alt = `This is an image of a product called ${productArray[imgThreeDisplay].name}`;

  productArray[imgOneDisplay].views++;
  productArray[imgTwoDisplay].views++;
  productArray[imgThreeDisplay].views++;
}

let sweep = new Products ('sweep', 'png');
let bag = new Products ('bag');
let banana = new Products ('banana');
let bathroom = new Products ('bathroom');
let boots = new Products ('boots');
let breakfast = new Products ('breakfast');
let bubblegum = new Products ('bubblegum');
let chair = new Products ('chair');
let cthulhu = new Products ('cthulhu');
let dogDuck = new Products ('dog-duck');
let dragon = new Products ('dragon');
let pen = new Products ('pen');
let petSweep = new Products ('pet-sweep');
let scissors = new Products ('scissors');
let shark = new Products ('shark');
let tauntaun = new Products ('tauntaun');
let unicorn = new Products ('unicorn');
let waterCan = new Products ('water-can');
let wineGlass = new Products ('wine-glass');

productArray.push(sweep, bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, waterCan, wineGlass);

console.log(productArray);

showImage();
