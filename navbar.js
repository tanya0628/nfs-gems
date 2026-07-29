const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");


// Mobile menu toggle

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

});




// Dropdown toggle

const dropdowns = document.querySelectorAll(".dropdown");


dropdowns.forEach(dropdown => {


    const btn = dropdown.querySelector(".drop-btn");


    btn.addEventListener("click",(e)=>{


        if(window.innerWidth <= 950){

            e.preventDefault();


            // close other dropdown

            dropdowns.forEach(item=>{

                if(item !== dropdown){

                    item.classList.remove("active");

                }

            });


            dropdown.classList.toggle("active");

        }


    });


});




// Close menu only normal links

const normalLinks = document.querySelectorAll(
".nav-links li:not(.dropdown) a"
);


normalLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(window.innerWidth <= 950){


            navLinks.classList.remove("active");


            menuIcon.classList.add("fa-bars");

            menuIcon.classList.remove("fa-xmark");


        }


    });


});