var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}


var requestComplete = function() { //callback from makeRequest
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
}


var populateList = function(beers) {
  var ul = document.getElementById("beer-list");
  beers.forEach(function(beer) {
  displayListByName(ul, beer);
  displayListByIngredients(ul, beer);
  displayListByImage(ul, beer);
  
  });
}

var displayListByName = function(ul, beer) {
  var liName = document.createElement("li");
  liName.innerText = "Name: " + beer.name;
  ul.appendChild(liName);
}

var displayListByImage = function(ul, beer) {
  var liImage = document.createElement("img");
  liImage.src = beer.image_url;
  // liImage.width = 50;
  // liImage.height = 50;
  ul.appendChild(liImage);
}



var displayListByIngredients = function(ul, beer) {
  // var arrayIngredients = [beer.ingredients]
  // console.log(arrayIngredients)
  var liIngredients = document.createElement("li");
  liIngredients.textContent = "Ingredients: " + beer.ingredients.malt[0].name + ", " + beer.ingredients.hops[0].name + " and " + beer.ingredients.yeast;
  // liIngredients.textContent = "Ingredients: " + beer.ingredients.malt[0].name + ", " beer.ingredients.hops[0].name + " and " + beer.ingredients.yeast[0].name;
  console.log(beer.volume.value)
 
  ul.appendChild(liIngredients);
}




var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete)
}

window.addEventListener('load', app);
 






////////////////////////////////////////////////////////////////////////////////////////////////////




// DROP DOWN Extension - not working


// var makeRequest = function(url, callback) {
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.addEventListener('load', callback);
//   request.send();
// }

// var requestComplete = function() { //callback from makeRequest
//   if(this.status !== 200) return;
//   var jsonString = this.responseText;
//   var beers = JSON.parse(jsonString);
//   populateList(beers);
// }

// var populateList = function(beers) {
//   var select = document.querySelector('select');
  
//   beers.forEach(function(beer) {
//     var option = document.createElement('option');
//     option.innerText = beer.name;
//     // if (beer.name === newBeer.name) {
//     //   option.selected = true;
//     //   populateDetails(beer)
//     // }
//     var jsonString = localStorage.getItem("beer");
//     var newBeer = JSON.parse(jsonString)
    
//     select.appendChild(option);
//   });
// }

// var handleSelectChange = function() {
//     var beer = document.querySelector('#beer-list');
//     populateDetails(beer);  
// }

// var populateDetails = function(beer) {
//   var ul = document.querySelector("#beer-list");
//   ul.innerHTML = "";

//   var liName = document.createElement("li");
//   var liImage = document.createElement("li");
//   var liIngredients = document.createElement("li");
  
//   liName.innerText = "Name: " + beer.name;
//   liImage.src = beer.image_url;
//   liIngredients.textContent = "Ingredients: " + beer.ingredients.malt[0].name + ", " + beer.ingredients.hops[0].name + " and " + beer.ingredients.yeast;
 
//   ul.appendChild(liName);
//   ul.appendChild(liImage);
//   ul.appendChild(liIngredients);

//   var anotherBeer = beer;
//   var jsonString = JSON.stringify(anotherBeer);
//   localStorage.setItem('anotherBeer', jsonString);  
// } 



// var app = function () {
//   var url = "https://api.punkapi.com/v2/beers";
//   makeRequest(url, requestComplete)
//   var selectList = document.querySelector('select');
//   selectList.addEventListener('change', handleSelectChange);
// }

// window.addEventListener('load', app);
//  