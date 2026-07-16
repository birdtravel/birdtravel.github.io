/* ===================================
   BIRD TRAVEL
   script.js
=================================== */


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



/* ==========================
   HEADER EFFECT
   Saat halaman discroll
========================== */

const header = document.querySelector("header");


window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }else{

        header.style.boxShadow = "none";

    }

});



/* ==========================
   FADE IN SECTION
========================== */

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==========================
   WHATSAPP CONFIRM
========================== */

const whatsappButton = document.querySelector(".button");


if(whatsappButton){

    whatsappButton.addEventListener("click", function(){

        console.log(
            "Menghubungkan ke WhatsApp Bird Travel..."
        );

    });

}



/* ==========================
   FOOTER YEAR OTOMATIS
========================== */

const year = document.querySelector("footer");


if(year){

    const currentYear = new Date().getFullYear();

    year.innerHTML =
    `&copy; ${currentYear} Bird Travel. All Rights Reserved.`;

}
