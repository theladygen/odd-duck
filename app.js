'use strict';
//globals
let productArray = [];
let votingRounds = 25;
let count = 0;

//constructor
function Products(name, fileExt = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExt}`;
  this.votes = 0;
  this.views = 0;
}

//dom elements
let displayContainer = document.getElementById('displayImages');
let imgOne = document.getElementById('img1');
let imgTwo = document.getElementById('img2');
let imgThree = document.getElementById('img3');
let button = document.getElementById('btn');

let indexArray = [];
function showImage(){
  while(indexArray.length < 6){
    let randomImage = Math.floor(Math.random() * productArray.length);
    if(!indexArray.includes(randomImage)){
      indexArray.push(randomImage);
    }
  }

  let imgOneDisplay = indexArray.shift();
  let imgTwoDisplay = indexArray.shift();
  let imgThreeDisplay = indexArray.shift();

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

//image click function
function handleImgClicks(event) {
  if (count < votingRounds) {

    for(let i = 0; i < productArray.length; i++){
      if(event.target.title === productArray[i].name){
        productArray[i].votes++;
      }
    }
    showImage();
    count++;
  }
  else{
    button.addEventListener('click', handleDisplayResults);
  }
}

//resulting chart display
function handleDisplayResults(){

  let productNames = [];
  let productVotes = [];
  let productViews = [];

  let allProductsString = JSON.stringify(productArray);
  localStorage.setItem('ProductArray', allProductsString);

  for(let i = 0; i < productArray.length; i++){
    productNames.push(productArray[i].name);
    productVotes.push(productArray[i].votes);
    productViews.push(productArray[i].views);
  }

  const ctx = document.getElementById('myChart');
  Chart.defaults.color = 'black';
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 2,
        backgroundColor: '#e76f51',
        borderColor: 'black',
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 2,
        backgroundColor: '#e9c46a',
        borderColor: 'black',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//local storage implementation
let previousProductArray = localStorage.getItem('ProductArray');

if(previousProductArray){
  previousProductArray = JSON.parse(previousProductArray);
  productArray = previousProductArray;
}
else {

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
}

displayContainer.addEventListener('click', handleImgClicks);
showImage();

//TODO: how can I get 'Chart' defined and not to error on line 84 and 85
