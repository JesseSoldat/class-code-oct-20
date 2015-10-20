import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Constructor
let MenuItem = function (params) {

  params = params || {};

  this.id = params.id;
  this.item = params.item;
  this.price = params.price;
  this.info = params.info;
  this.quantity = 100;

  this.soldOne = function () {
    return this.quantity = this.quantity - 1;
  }

  this.eightSix = function () {
    return this.quantity = 0;
  }

};

let url = 'https://json-data.herokuapp.com/restaurant/menu/1';
let menu = new Array(); // []
let menuRequest = $.getJSON(url);

menuRequest.then( function (response) {

  _.each(response.entrees, function (entree) {

    let x = new MenuItem(entree);
    menu.push(x);

  });

  console.log(menu);

});


// Function to sell an Item
window.sellItem = function (specId) {

  // Take the id param
  // Find the spec item in the array
  let specItem = _.findWhere(menu, { id: specId });
    
  // Run that spec item's `soldOne` method
  specItem.soldOne();

  // log out the name + remaining quantity
  console.log(specItem.item + ' has sold one, and there is ' + specItem.quantity + ' left.');

};
