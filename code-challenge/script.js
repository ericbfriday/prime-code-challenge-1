console.log('JS loaded');

var numberOfClicks = 0;

var onReady = function() {
  console.log('the doc is ready');
  $('#create').on('click', createDiv);

};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);

function createDiv() {
  console.log('appending div with buttons');  
  $('#container').append('<div class="color-div" ><p class="counter">' 
  + numberOfClicks 
  + '</p>' 
  + '<button class="swap">Swap</button>' 
  + '<button class="delete">Delete</button>' 
  + '</p></div>');
  numberOfClicks ++;
  $('.counter').on('click', counter);
  $('.delete').on('click', deleter);
}

function counter() {
  console.log('Counting clicks');
  $(".counter").html(numberOfClicks);
}

function deleter() {
  console.log('deleting div');  
  $(this).closest('div').remove();
}

function swapper() {
  $('.swap').on('click', )
  $('.swap').on('click', swapper);
}
// create button
// create div element when clicked
// inside that, create a p element that shows total count of times you've clicked that
// create two buttons inside div -- Swap & Delete
// clicking delete should remove the parent div container
