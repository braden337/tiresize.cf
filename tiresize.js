// Tire Size Calculator

var phone = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

var myDataRef = new Firebase('https://p5a5uf37kou.firebaseio-demo.com/');

function getDiameter(width, ratio, height) {
  height *= 25.4;
  ratio /= 100;
  return (2* width * ratio) + height;
}


function getError(oldtire, newtire) {
  var error = Math.round(-100*(1-newtire/oldtire)*100)/100;
  var speedo = Math.round(100*(1+error/100)*100)/100;
  //console.log("At 100kph it will show " + speedo + "kph");
  //console.log(error);
  var errors = [error, speedo];
  return errors;
}


//var oldtire = getDiameter(185,70,14);
//var newtire = getDiameter(195,50,15);
//getError(oldtire,newtire);


if(!phone) {
  
  $(document).ready(function() {
    $(".first-input").focus();
    $("#edit-with-js-bin").remove();
  });

  $("form input[type=tel]").on('input',function () {
    if($(this).val().length == $(this).attr('maxlength')) {
      if($(this).hasClass( "third-input" )) {
        $(".fourth-input").focus();
      }
//     else if($(this).hasClass( "sixth-input" )) {
//       $(this).focus();
//     }
else {
  $(this).next("input").focus();
}
}
});
  
}

$("form input[type=tel]").focus(function() { $(this).select(); } );


var app = angular.module('jsbin', []);


app.controller('TireCtrl', function() {
  this.difference = function() {
    w1 = parseInt(this.width1);
    r1 = parseInt(this.ratio1);
    h1 = parseInt(this.height1);
    w2 = parseInt(this.width2);
    r2 = parseInt(this.ratio2);
    h2 = parseInt(this.height2);
    tire1 = getDiameter(w1, r1, h1);
    tire2 = getDiameter(w2, r2, h2);
    error = getError(tire1, tire2)[0];
    return error;
  };
  
  this.speed = function() {
    speedo = getError(tire1, tire2)[1];
    return speedo;
  };
  
  this.reset = function() {
    this.width1 = "";
    this.ratio1 = "";
    this.height1 = "";
    this.width2 = "";
    this.ratio2 = "";
    this.height2 = "";
    $(".first-input").focus();
  };
  
  this.reveal = function() {
    if(h2 > 10) {
      return true;
    }
    
  };
  
});












document.ontouchmove = function (event) {
  var isTouchMoveAllowed = false;
  var p = event.target;

  while (p != null) {
    if (p.classList && p.classList.contains("touchMoveAllowed")) {
      isTouchMoveAllowed = true;
      break;
    }
    p = p.parentNode;
  }

  if (!isTouchMoveAllowed) {
    event.preventDefault();
  }

};