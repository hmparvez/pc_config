  // If you want hoverable dropdown you need to add this JavaScript OR If you want Clickable dropdown you have to remove this JavaScript Code
$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });    
    


// Arif java add to cart
            var quantity1=1;
            var x=[];
            
            function oneFunctionadd()
            {
                quantity1++;
                price =10000;
                price *= quantity1;
                document.getElementById("demo").innerHTML=quantity1;
                document.getElementById("demo1").innerHTML=price;
            }
            function oneFunctiondel()
            {
                if(quantity1 > 0)
                    quantity1--;
                    price=10000;
                    price *= quantity1;
                    document.getElementById("demo").innerHTML=quantity1;
                    document.getElementById("demo1").innerHTML=price;
            }

            function totalSum(){
                var i;
                var total=0;
                
                total=quantity1;
                
                document.getElementById("demo5").innerHTML=total;
            }
            

// brand logo slider by tarik

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
// End of brand logo
  
// javascript of arif
    // <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
//    for right 3rd slide
            var slideIndex6=1;
            showDivssssss(slideIndex6);
            function plusDivssssss(n)
            {
                showDivssssss(slideIndex6 +=n);
            }
            function showDivssssss(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlidettttt");
                if(n>x.length)
                {
                    slideIndex6=1;
                }
                if(n<1)
                {
                    slideIndex6=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex6-1].style.display="block";
            }
  
//    for right 2nd slide
            var slideIndex5=1;
            showDivsssss(slideIndex5);
            function plusDivsssss(n)
            {
                showDivsssss(slideIndex5 +=n);
            }
            function showDivsssss(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlidetttt");
                if(n>x.length)
                {
                    slideIndex5=1;
                }
                if(n<1)
                {
                    slideIndex5=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex5-1].style.display="block";
            }

//    for right 1st slide
            var slideIndex4=1;
            showDivssss(slideIndex4);
            function plusDivssss(n)
            {
                showDivssss(slideIndex4 +=n);
            }
            function showDivssss(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlidettt");
                if(n>x.length)
                {
                    slideIndex4=1;
                }
                if(n<1)
                {
                    slideIndex4=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex4-1].style.display="block";
            }

//    for left 3rd slide
            var slideIndex3=1;
            showDivsss(slideIndex3);
            function plusDivsss(n)
            {
                showDivsss(slideIndex3 +=n);
            }
            function showDivsss(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlidett");
                if(n>x.length)
                {
                    slideIndex3=1;
                }
                if(n<1)
                {
                    slideIndex3=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex3-1].style.display="block";
            }

//    for left 2nd slide
            var slideIndex2=1;
            showDivss(slideIndex2);
            function plusDivss(n)
            {
                showDivss(slideIndex2 +=n);
            }
            function showDivss(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlidet");
                if(n>x.length)
                {
                    slideIndex2=1;
                }
                if(n<1)
                {
                    slideIndex2=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex2-1].style.display="block";
            }

            var slideIndex=1;
            showDivs(slideIndex);
            function plusDivs(n)
            {
                showDivs(slideIndex +=n);
            }
            function showDivs(n)
            {
                var i;
                var x=document.getElementsByClassName("mySlide");
                if(n>x.length)
                {
                    slideIndex=1;
                }
                if(n<1)
                {
                    slideIndex=x.length;
                }
                 for(i=0; i<x.length ;i++)
                 {
                     x[i].style.display="none";
                 }
                 x[slideIndex-1].style.display="block";
            }

 // top up buttom start here- parvez
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}