// local reviews data
 const reviews =[
    {
       id:1,
       name:"Susan Smith",
       job:"Web developer" ,
       img:"image3.png",
       text:"Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic. Front-end developers focus on the user-facing side of their work, while back-end developers make websites functional and secure.",
    },
    {
        id:2,
        name:"anna johnsan",
        job:"Web designer" ,
        img:"image2.png",
        text:"A Web Designer creates and oversees all visual aspects of websites. Web Designers plan, ideate, create, and build websites and web pages, many of which combine a number of visual elements including text, photos, graphics, and video clips.",
     },
     {
        id:3,
        name:"josef smith",
        job:"Content writer" ,
        img:"image4.png",
        text:"Content writing is the process of creating and publishing written content for a variety of purposes, including marketing, education, and entertainment. Content writers must be able to research topics, write in a clear and concise style, and edit their work for grammar and spelling errors.",
     },
     {
        id:4,
        name:"bill anderson",
        job:"The boss" ,
        img:"image.png",
        text:"The story follows Michelle Darnell, a titan of industry who is sent to prison for insider trading, denounced by her former lover, Renault, who still holds a heavy grudge towards her for their breakup, after getting a promotion a few years ago.",
     },
      
        
 ]
 // select items 
 const img = document.getElementById("person-img");
 const author = document.getElementById("author");
 const job = document.getElementById("job");
 const info = document.getElementById("info");

 // select buttons

 const prevBtn = document.querySelector(".prev-btn");
 const nextBtn = document.querySelector(".next-btn");
 const randomBtn = document.querySelector(".random-btn");

 // set starting item 
 let currentItem = 0;
 // load initial item
 window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
 });
 // show person based on item 
 function showPerson (){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.text
 }
 //show next person
 nextBtn.addEventListener('click',function(){
    currentItem++
    if (currentItem > reviews.length - 1){ 
        currentItem = 0;
    }
    showPerson();
 });
 //show prev person
 prevBtn.addEventListener('click',function(){
    currentItem--
    if (currentItem < 0){ 
        currentItem = reviews.length - 1;
    }
    showPerson();
 });
 // show random person
 randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson()
 })
 