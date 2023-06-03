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
// let results = document.getElementById('displayResults');

// function randomImage(){
//   return Math.floor(Math.random() * productArray.length);
// }
//random image function
let indexArray = [];
function showImage(){
  while(indexArray.length < 6){
    let randomImage = Math.floor(Math.random() * productArray.length);
    if(!indexArray.includes(randomImage)){
      console.log('index has been pushed');
      indexArray.push(randomImage);
    }
  }

  let imgOneDisplay = indexArray.shift();
  let imgTwoDisplay = indexArray.shift();
  let imgThreeDisplay = indexArray.shift();

  // while(imgOneDisplay === imgTwoDisplay || imgTwoDisplay === imgThreeDisplay || imgThreeDisplay === imgOneDisplay){
  //   imgOneDisplay = randomImage();
  //   imgTwoDisplay = randomImage();
  //   imgThreeDisplay = randomImage();
  // }

  // imgOne.src = productArray[randomImage()].img;
  // imgTwo.src = productArray[randomImage()].img;
  // imgThree.src = productArray[randomImage()].img;

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

// function handleImgClicks(event){
//   let imgClicked = event.target.title;

//   for(let i = 0; i < productArray.length; i++){
//     if(imgClicked === productArray[i].name){
//       productArray[i].votes++;
//     }
//   }
//   votingRounds--;
//   showImage();
//   if(votingRounds === 0){
//     displayContainer.removeEventListener('click', handleImgClicks);
//   }
// }
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
  // if(votingRounds === 0){
  //   for(let i = 0; i < productArray.length; i++){
  //     let productItem = document.createElement('li');
  //     productItem.textContent = `${productArray[i].name}: Views: ${productArray[i].views} and Votes: ${productArray[i].votes}`;
  //     results.appendChild(productItem);
  //   }
  let productNames = [];
  let productVotes = [];
  let productViews = [];
  for(let i = 0; i < productArray.length; i++){
    productNames.push(productArray[i].name);
    productVotes.push(productArray[i].votes);
    productViews.push(productArray[i].views);
  }
  // button.removeEventListener('click', handleDisplayResults);

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 1
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

let sweep = new Products ('Sweep', 'png');
let bag = new Products ('Bag');
let banana = new Products ('Banana');
let bathroom = new Products ('Bathroom');
let boots = new Products ('Boots');
let breakfast = new Products ('Breakfast');
let bubblegum = new Products ('Bubblegum');
let chair = new Products ('Chair');
let cthulhu = new Products ('Cthulhu');
let dogDuck = new Products ('Dog-duck');
let dragon = new Products ('Dragon');
let pen = new Products ('Pen');
let petSweep = new Products ('Pet-sweep');
let scissors = new Products ('Scissors');
let shark = new Products ('Shark');
let tauntaun = new Products ('Tauntaun');
let unicorn = new Products ('Unicorn');
let waterCan = new Products ('Water-can');
let wineGlass = new Products ('Wine-glass');

productArray.push(sweep, bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, waterCan, wineGlass);

displayContainer.addEventListener('click', handleImgClicks);
showImage();
//TODO: how can I get 'Chart' defined and not to error
//TODO: clean unnecessary commented out code
