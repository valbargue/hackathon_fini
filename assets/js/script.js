const images = document.querySelectorAll(".image");

const navbtn = document.getElementById("navbtn");

const windowWidth = screen.width;




if (windowWidth > 1000) {

  images.forEach((img) => {



    // I call the event mouseover



    img.addEventListener("mouseover", (e) => {

      images.forEach((img) => {

        img.classList.remove("active");

      });

      img.classList.add("active");

    });

  });



}



// when there is a mouse'hover on the card it swips to the next one



// *********** End of slidder effect********

const scroll = document.getElementById("headerLogo")

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY < 500) {
    console.log("pioupiou")
    headerLogo.style.display = "flex";
  } else {
    headerLogo.style.display = "none";
  }
});

navbtn.addEventListener("click", () => {
  navitem.classList.toggle("navactive");
  navbtn.classList.toggle("btnActive");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    top.style.height = "150px";
  } else {
    top.style.height = "200px";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// evenement.addEventListener("click", ()=>{
//   modal1.classList.add("modalActive")
// })

// closeBtn.addEventListener("click", ()=> {
//   modal1.classList.remove("modalActive")
// })

//>Création des modals
const cards = document.querySelectorAll(".cardEvent")
const closeBtn = document.querySelectorAll('.closeBtn')
console.log(closeBtn)

// création d'un for each pour identifer la card sur laquelle on click
cards.forEach((card) => {

  card.addEventListener("click", (e) => {
    console.log(e)
    // on supprime toutes les class
    modal1.classList.remove("modalActive")
    modal2.classList.remove("modalActive")
    modal3.classList.remove("modalActive")
    modal4.classList.remove("modalActive")

    // avec le switch, on cherche à savoir qu'est ce qui a été cliqué 
    switch (e.target.id) {
      // e.target.id indique l'id de l'élément cliqué 
      case "evenement":
        modal1.classList.add("modalActive");
        break;
      case "egv":
        modal2.classList.add("modalActive");
        break;
      case "anniv":
        modal3.classList.add("modalActive");
        break;
      case "teamB":
        modal4.classList.add("modalActive");
        break;
    }
  })
})
// On regroupe tout nos bouton et on applique les mêmes directives mais pour supprimer la classe modalActive
closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal1.classList.remove("modalActive")
    modal2.classList.remove("modalActive")
    modal3.classList.remove("modalActive")
    modal4.classList.remove("modalActive")
  })
})

// modal active est une classe non présente dans le DOM, elle attends dêtre injecté.