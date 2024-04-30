let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");

    if(window.scrollY > 50){
        document.querySelector("#scroll-top").classList.add('active')
    }else{
        document.querySelector("#scroll-top").classList.remove('active')
    }
}