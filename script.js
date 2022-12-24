const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});









var arr = [
    
    {img: " paytm/mobile.png", bio:"Recharge <br> Prepaid<br> Mobile"},
    {img: "paytm/ghar.png", bio:"Pay <br> Rent <br> Payment"},
    {img: "paytm/bulb.png", bio:"Pay <br> Electricity <br>  Bill"},
    {img: "paytm/dish tv.png", bio:"Recharge <br>  DTH <br>  Connection"},
    {img: "paytm/cylinder.png", bio:"Book <br>  Gas <br>  Cylinder"},
    {img: "paytm/card2.png", bio:"Pay <br>  Credit <br>  Card Bill"},
    {img: "paytm/cards.png",bio:"All <br>  Payment <br>  Services"}, 
]
var cards ="";
arr.forEach(function(elem){
    cards += `   <div class="box2card1">
     <img  src="${elem.img}" width="70px" height="70px" alt="">
    <h2> ${elem.bio}<i class="ri-arrow-right-s-line"></i></h2>
</div>`
})
document.querySelector(".box2top1").innerHTML = cards;

var ary = [
    
    {img: " paytm/action.png", bio:"Movie <br> Tickets"},
    {img: "paytm/flightfront.png", bio:"Flight<br> Tickets "},
    {img: "paytm/busfront.png", bio:"Bus<br> Tickets"},
    {img: "paytm/trainfront.png", bio:"Train<br> Tickets"},
    {img: "paytm/scooter.png", bio:"Car <br>  Bikes"},
    {img: "paytm/globeflight.png", bio:"International <br> Flights"},
    {img: "paytm/rupee.png",bio:"Invest<br>  in Stocks"}, 
]
var cards1 ="";
ary.forEach(function(elem){
    cards1 += `   <div class="box2card2">
     <img  src="${elem.img}" width="70px" height="70px" alt="">
    <h2> ${elem.bio}<i class="ri-arrow-right-s-line"></i></h2>
</div>`
})
document.querySelector(".box2top2").innerHTML = cards1;

var arry = [
    
    {img: " paytm/1626081565192.png", bio:"POS Billing <br> Software", para:"Say Hello to Smart Retail <br> Business Management" },
    {img: "paytm/1626081071077.png", bio:"Paytm for <br>Business App",para:"Everything you need to <br>manage your business <br> on your phone"},
    {img: "paytm/1656568216166.png", bio:"Advertise on <br>Paytm",para:"Grow your business by <br> advertising on India’s<br> largest mobile business"},
    {img: "paytm/1626081814411.png", bio:"Business <br> Khata",para:"Managing Khata made <br> easy"},
]
var cards2 ="";
arry.forEach(function(elem){
    cards2 +=` <div class="b13cards">

    <img src="${elem.img}" width="250px" height="250px"  alt="">
    <h2>${elem.bio}</h2>
    <h3>${elem.para}</h3>
    <div class="learn">
    <p>Learn More</p>
    <i class="ri-arrow-right-line"></i>
    </div>
</div>`
})
document.querySelector(".box13cards").innerHTML = cards2;



var array = [
    
    {img: " paytm/1618576143299.png", bio:"Invest in  <br> Stocks"},
    {img: "paytm/1618575899205.png", bio:"Apply for IPO"},
    {img: "paytm/1618831809222.png", bio:"Invest in <br> ETFs"},
    {img: "paytm/1618575990183.png", bio:"Buy Gold"},
    {img: "paytm/1618576408440.png", bio:"Invest in <br>Mutual Funds"}
]
var cards3 ="";
array.forEach(function(elem){
    cards3 +=`<div class="bt14cards">
    <img src="${elem.img}"width="150px" height="150px"   alt="">
    <h2>${elem.bio}</h2> </div>`
   
})
document.querySelector(".bt14right").innerHTML = cards3;

var arra = [
    {img: " paytm/flight.png", bio:"Flat  14% <br> Cashback", para:"With Code <br> WELCOMEFLIGHT"},
    {img: "paytm/planeshield.png", bio:"100% refund", para: "With Paytm's <br> Cancellation Protect"},
    {img: "paytm/bus.png", bio:"Flat 10% <br> Cashback", para: "With Code <br> HAPPYBUS"},
    {img: "paytm/shield.png.png", bio:"Sanitised Bus <br> Options With<br> TravelSafe+" , para:""},
    {img: "paytm/train.png.png", bio:"Hassle Free <br>Train Ticket <br> Bookings",para:""},
    {img: "paytm/pnrstatus.png", bio:"PNR Status <br> Check In Few <br> Simple Clicks",para:""}

]
var cards4 = "";
arra.forEach(function(elem){
    cards4+= ` <div class="bb14cards">
    <img src="${elem.img}" width="70px" height="70px" alt="">
    <h2>${elem.bio}</h2>
    <h3>${elem.para}</h3>
   </div>`
})
document.querySelector(".bb14right").innerHTML=cards4;
















