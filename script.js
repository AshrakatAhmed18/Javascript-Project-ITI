let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function starcolored (){
  var star = document.getElementsByClassName = "fa fa-star ";
  if(id==1){
    star.innerHTML="color,orange";
  }
};
function Tshirt() { 
  var tshirt =  document.getElementById("products");
  tshirt.style.display = "block";
  var nonesk = document.getElementById("products2");
  nonesk.style.display ="none";
 var nonderss = document.getElementById("products3");
  nonderss.style.display = "none";
 var nonesho = document.getElementById("products4");
 nonesho.style.display ="none";
};
function Skirts() { 
  var noneTsh = document.getElementById("products");
  noneTsh.style.display="none";
  var Skirts =  document.getElementById("products2");
  Skirts.style.display = "block";
  var nonderss = document.getElementById("products3");
  nonderss.style.display = "none";
  var nonesho = document.getElementById("products4");
  nonesho.style.display ="none";
 };
 
 function Dresses() { 
  var noneTsh = document.getElementById("products");
  noneTsh.style.display="none";
  var nonesk = document.getElementById("products2");
  nonesk.style.display ="none";
  var Dresses =  document.getElementById("products3");
  Dresses.style.display = "block";
  var nonesho = document.getElementById("products4");
  nonesho.style.display ="none";
 };
 
 function Shoes() { 
  var noneTsh = document.getElementById("products");
  noneTsh.style.display="none";
  var nonesk = document.getElementById("products2");
  nonesk.style.display ="none";
  var nonderss =  document.getElementById("products3");
  nonderss.style.display = "none";
  var Shoes =  document.getElementById("products4");
  Shoes.style.display = "block";
 };

var display = document.getElementById("display");  //span
var add = document.getElementById("addtocard"); //ADD
 var count = 0;

  function cart(){
      count += 1;
      display.textContent = (count);
  };
  



function TopPage(){
  var arrow = getElementById("arrow");
  arrow.style.innerHTML(top,0);
};

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}
