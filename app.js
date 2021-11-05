let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
// let navCenter = document.querySelector(".nav-center")


navToggle.addEventListener("click", ()=>{
    //  if (links.classList.contains("show-links")) {
    //      links.classList.remove("show-links");
    //  } else{
    //      links.classList.add("show-links")
    //  }
        links.classList.toggle("show-links");
 });
