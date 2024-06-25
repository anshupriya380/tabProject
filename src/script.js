let pic=document.getElementById("pic");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");

btn1.addEventListener("click",function(){
    one.innerHTML="Road Journey";
    two.innerHTML=" Road trip is one of the best ways to freshen the mind and enjoy every moments with nature. It is a best way to uplift the mood and capture the happiest moments into the album of good memories for future. People who love travelling mostly prefer road trips as they offer a completely different experience. Whether one is going out with family or friends – road trips are considered to be the best way to enjoy the vacation to the fullest.";
    pic.setAttribute("src","./images/road.jpg");
})
btn2.addEventListener("click",function(){
    one.innerHTML="Train Journey";
    two.innerHTML="One of the most thrilling travel experiences is taking a train. It often comes in two ways: overnight excursions and short day trips. Because getting to sit on window seats on trains is such pure joy, kids often love taking them. Train rides offer a break from the routine.";
    pic.setAttribute("src","./images/train.jpg");
}) 
btn3.addEventListener("click",function(){
    one.innerHTML="boat Journey";
    two.innerHTML=" A boat is a vehicle used to travel on water. It is smaller than a ship and can be lifted out of the water and carried on a ship. Some boats have sails, some are powered by rowing with oars, and some use motors. Those that use steam engines are steamboats.";
    pic.setAttribute("src","./images/boat.jpg");
}) 