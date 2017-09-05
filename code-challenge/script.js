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
  numberOfClicks ++;
  $('#container').append('<div class="color-div" ><p>' 
  + numberOfClicks 
  + '</p>' 
  + '<button class="swap">Swap</button>' 
  + '<button class="delete">Delete</button>' 
  + '</p></div>');
  $('.counter').on('click', counter);
  $('.delete').on('click', deleter);
  $('.swap').on('click', swapper);
}

function counter() {
//  console.log('Counting clicks');
  $(".counter").html(numberOfClicks);
} // ending counter function

function deleter() {
//  console.log('deleting div');  
  $(this).closest('div').remove();
} // ending deleter function

function swapper() {
  if ($(this).closest('div').css('background-color', 'red')) {
    $('.swap').on('click', $(this).closest('div').css('background-color', 'yellow'));    
  }
  else {
    $(this).closest('div').css('background-color', 'red');    
  }
} // ending swapper function

/** failed attempt
function swapper() {
  $(this).closest('div').toggle(
    function(){
      $(this).closest('div').css('background-color', 'yellow')}, 
    function(){ 
    $(this).closest('div').css('background-color', 'red')}
  );
} // end swapper function
 */


