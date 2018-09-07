/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
var $background = $('.h-body');
var $floatHeart = $('.float-heart');
var $compareState = $('.compare-state');
var $compareCard = $('.compare-card');
var $miniCTA = $('.menu-chip');
var $maxCTA = $('.maximizeCta');
var cardState = 'card-closed';


/* 

//Draggable thingy 

var startMouseY = 0;
var startPos = 0;
var dragging = false;
var moveby = 0;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

$('.compare-card').on('touchstart',function(e){
   if(cardState == 'card-open') {
      startMouseY = unify(e).clientY;
      dragging = true;
      $(document).on("touchmove", draggingCardOnMove);
      $(document).on("touchend", endCardTouch);
   }
});


function endCardTouch(e){
   if(dragging == true && (cardState == 'card-open')) {
      dragging == false;
      $compareCard.attr('style','');
      
      if(moveby > 100) {
         changeState('card-minimized');
      }
      console.log(moveby);
      
      $(document).off("touchmove", draggingCardOnMove);
      $(document).off("touchend", endCardTouch);
   }
}

function draggingCardOnMove(e){
   if(dragging == true && (cardState == 'card-open')) {
      var Ymoved = unify(e).clientY - startMouseY;
      
      if(cardState == 'card-open') {
         moveby = Math.min(230,Math.max(0 , Ymoved));
      }
      
      $compareCard.css({
         transform : 'translateY('+ moveby+'px)'
      });
      
   }
}

*/



$floatHeart.on('click',function(e){
  e.preventDefault();
  changeState('card-open');
});

$miniCTA.on('click',function(e){
  e.preventDefault();
  e.stopPropagation();
   
   switch(cardState) {
      case 'card-maximized':
         changeState('card-open');
         break;
      case 'card-open':
         changeState('card-minimized');
         break;
      case 'card-minimized':
         changeState('card-open');
         break;
   }
  
});

$maxCTA.on('click',function(e){
  e.preventDefault();
  changeState('card-maximized');
});

$background.on('click',function(e){
   e.preventDefault();
   if(cardState == 'card-open') {
      changeState('card-closed');
   }
});

$compareCard.on('click',function(e){
   if(cardState == 'card-minimized') {
      e.preventDefault();
      changeState('card-open');
   }
});


function changeState(state){
   $compareState.removeClass('card-closed card-maximized card-minimized card-open');
   $compareState.addClass(state);
   cardState = state;
}