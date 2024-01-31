let searchBtn = document.querySelector("#search-btn");
let searhBar = document.querySelector('search-bar-container');
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector('login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-items');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle("fa-Times");
    navbar.classList.toggle('active');
});





















var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
    var tab_data = list.getAttribute("data-tc");
    
    tab_lists.forEach(function(list){
      list.classList.remove("active");
    });
    list.classList.add("active");
    
    tab_items.forEach(function(item){
      var tab_class = item.getAttribute("class").split(" ");
      if(tab_class.includes(tab_data)){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
      
    })
    
  })
})










window.onscroll = () =>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove('active');
    menu.classList.toggle("fa-Times");
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});




