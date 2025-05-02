
let displaytextF = true;
let displaytextE = true;
let displaytextL = true;

let img1T = true;
let img2T = true;
let img3T = true;
let img4T = true;
let img5T = true;


// Smooth scroll avec easing
(function () {
  let scrollPos = window.scrollY;
  let targetScroll = scrollPos;
  let isScrolling = false;

  function ease(current, target, factor = 0.1) {
    return current + (target - current) * factor;
  }

  function smoothScrollLoop() {
    scrollPos = ease(scrollPos, targetScroll);
    window.scrollTo(0, scrollPos);

    if (Math.abs(scrollPos - targetScroll) > 0.5) {
      requestAnimationFrame(smoothScrollLoop);
    } else {
      isScrolling = false;
    }
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScroll += e.deltaY;

    // limiter le scroll dans la page
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothScrollLoop);
    }
  }, { passive: false });
})();

function intro() {
    const image = document.querySelector(".carte");
    const remain = document.querySelector(".remain");
    image.classList.add("agrandie");

    // Attendre la fin de l'animation pour changer le fond
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    },200);
    setTimeout(() => {
        document.body.style.height = auto;
        image.style.display = "none"; // Cache complètement l’image
    }, 500); 
    setTimeout(() => {
        image.style.marginLeft = 0;
    },600);
    setTimeout(() => {
        remain.style.display = "grid";
    },600);

}
function displayProjects(idProject){
    const image = document.getElementById("imgProjects");
    const text = document.getElementById("descProjects");
    const container = document.getElementById("displayProjects");

    if(idProject === 1) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 1";
        container.classList.add('show');
    }
    else if(idProject === 2) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 2";
        container.classList.add('show');
    }
    if(idProject === 3) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 3";
        container.classList.add('show');
    }
    else if(idProject === 4) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 4";
        container.classList.add('show');
    }
    else if(idProject === 5) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 5";
        container.classList.add('show');
    }
    else if(idProject === 6) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 6";
        container.classList.add('show');
    }
    else if(idProject === 7) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 7";
        container.classList.add('show');
    }
    else if(idProject === 8) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 8";
        container.classList.add('show');
    }
    else if(idProject === 9) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 9";
        container.classList.add('show');
    }
    else if(idProject === 10) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 10";
        container.classList.add('show');
    }
    else if(idProject === 11) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 11";
        container.classList.add('show');
    }
    else if(idProject === 12) {
        image.src = "src/rectangleBlanc.png"
        image.style.display = "block"
        text.textContent = "texte Projet 12";
        container.classList.add('show');
    }
    
}


function displayText(buttonNumber) {
    const contentTextF = document.getElementById('displayTextF');
    const contentTextE = document.getElementById('displayTextE');
    const contentTextL = document.getElementById('displayTextL');

    // Définir le texte selon le bouton cliqué
    switch (buttonNumber) {
      case 1:
        if (displaytextF){
          contentTextF.innerHTML = document.getElementById('displayTextFbis').innerHTML;
          document.getElementById("titleFormation").style.textDecoration = "underline";
          contentTextF.classList.add("show");
          displaytextF = false;
          break;
        }

        else {
          contentTextF.innerHTML = '';
          displaytextF = true;
          document.getElementById("titleFormation").style.textDecoration = "none";
          contentTextF.classList.remove("show");
          break;
        }

      case 2:
        if(displaytextE){
          contentTextE.innerHTML = document.getElementById('displayTextEbis').innerHTML;
          document.getElementById("titleExperience").style.textDecoration = "underline";
          contentTextE.classList.add("show");
          displaytextE = false;
          break;
        }
        else {
          contentTextE.innerHTML = '';
          displaytextE = true;
          document.getElementById("titleExperience").style.textDecoration = "none";
          contentTextE.classList.remove("show");
          break;
        }
        
      case 3:
        if (displaytextL){
          contentTextL.innerHTML = document.getElementById('displayTextLbis').innerHTML;
          document.getElementById("titleLogiciel").style.textDecoration = "underline";
          contentTextL.classList.add("show");
          displaytextL = false;
          break;
        }
        else {
          contentTextL.innerHTML = '';
          displaytextL = true;
          document.getElementById("titleLogiciel").style.textDecoration = "none";
          contentTextL.classList.remove("show");
          break;
        }
        
    }
  }

  function shrinkHeaderOnScroll() {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  }
  
  function shrinkHeader() {
    const header = document.querySelector("header");
  
    if (window.scrollY > 100) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  }
  
  window.onscroll = adjustHeaderOnScroll();

  function adjustHeaderOnScroll() {
    const header = document.querySelector("header");
    const title = document.querySelector("#logoHeader");
  
    const maxHeight = window.innerHeight; // 100vh
    const minHeight = 60; // px
    const scrollMax = 300; // px
  
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const clampedScroll = Math.min(scroll, scrollMax);
  
      // Calcul hauteur du header
      const newHeight = maxHeight - ((maxHeight - minHeight) * (clampedScroll / scrollMax));
      header.style.height = `${newHeight}px`;
  
      // Taille de police
      const maxFont = 2.5;
      const minFont = 1.2;
      const newFont = maxFont - ((maxFont - minFont) * (clampedScroll / scrollMax));
      title.style.fontSize = `${newFont}rem`;
  
      // Transition du titre
      if (scroll >= scrollMax) {
        // header.style.justifyContent = "flex-start";
        header.style.paddingLeft = "20px";
        title.style.transform = "translateY(-5px)";
      } else {
        header.style.justifyContent = "center";
        header.style.paddingLeft = "0";
        title.style.transform = "translateY(0)";       
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", adjustHeaderOnScroll);

  window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoSR");
  
    // Mettre le volume initial à 50%
    video.volume = 0.3;
  
    // Autoplay si besoin :
    // video.play();
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Pour éviter de rejouer à chaque scroll :
        observer.unobserve(entry.target);
      }
      else {
        entry.target.classList.remove("show")
      }
    });
  }, {
    threshold: 0.3, // 30% visible
  });
  
  document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
  });


  let scrollState = 1;

  function navigateur(id) {
    const img1 = document.getElementById('imgMoi');
    const img2 = document.getElementById('imgEtu');
    const img4 = document.getElementById('imgPro');
    const img5= document.getElementById('imgCon');
    const content = document.getElementById('display');
    const moi = document.getElementById('displayMoi');
    const licence = document.getElementById('displayLicence');
    const projets = document.getElementById('displayProjets');
    const contact = document.getElementById('displayContact');

    



    // Définir le texte selon le bouton cliqué
    switch (id) {
      case 1:

      img1.src = "src/person_bleu.svg";
      img2.src = "src/études.svg";
      img4.src = "src/projets.svg";
      img5.src = "src/chat.svg";
      content.innerHTML = moi.innerHTML;
      scrollState = 1;
      break;

      case 2:
        
      img1.src = "src/moi.svg";
      img2.src = "src/school_bleu.svg";
      img4.src = "src/projets.svg";
      img5.src = "src/chat.svg";
      content.innerHTML = licence.innerHTML;
      scrollState = 2;
      break;

      case 3:

      img1.src = "src/moi.svg";
      img2.src = "src/études.svg";
      img4.src = "src/work_bleu.svg";
      img5.src = "src/chat.svg";
      content.innerHTML = projets.innerHTML;
      scrollState = 3;
      break;

      case 4:

      img1.src = "src/moi.svg";
      img2.src = "src/études.svg";
      img4.src = "src/projets.svg";
      img5.src = "src/chat_bleu.svg";
      content.innerHTML = contact.innerHTML;
      scrollState = 4;
      break;

    }
  }


  function scrollToSection(n) {
    const section = document.getElementById(n);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }




  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      console.log('Vous êtes en bas de la page !');
    }
  });



const steps = document.querySelectorAll('.step');
const content = document.getElementById('content');

steps.forEach(step => {
  step.addEventListener('click', () => {
    steps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');
  });
});

function displayEtude(id){
  const content = document.getElementById('content');
  const licence = document.getElementById('displayLicence');
  const projet = document.getElementById('displayProjets');

  switch (id){
    case 1:
    content.innerHTML = licence.innerHTML;
    

    case 2:
    content.innerHTML = projet.innerHTML;
  }

}

function showModal(imageId) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalButton = document.getElementById('modal-description');


  switch (imageId) {
    case 'img1':
      modalImage.src = 'src/Lucie.png';
      modalTitle.textContent = "Portfolio Lucie Thiebeult";
      modalDescription.textContent = "HTML, CSS, Javascript - Portfolio étudiante vidéo.";
      setTimeout(() => {
        modalButton.onclick = allerAuSite(1);
      }, 3000);
      
      break;
    case 'img2':
      modalImage.src = 'src/jeune soin .png';
      modalTitle.textContent = "Jeune soin";
      modalDescription.textContent = "Wordpress - site de promotion collectif de Rap";
      setTimeout(() => {
        modalButton.onclick = allerAuSite(2);
      }, 3000);
      break;
    case 'img3':
      modalImage.src = 'src/GestioTache.png';
      modalTitle.textContent = "GestioTache";
      modalDescription.textContent = "C++, Qt - Application de gestion de taches";
      modalButton.onclick = "window.location.href = 'https://github.com/ByWizKi/GestioTache';"
      setTimeout(() => {
        modalButton.onclick = allerAuSite(3);
      }, 3000);
      break;
    case 'img4':
      modalImage.src = 'src/projetBDW.png';
      modalTitle.textContent = "Projet Base de Donnée Web";
      modalDescription.textContent = "HTML, CSS, PHP, SQL - Site projet pour gestion de base de donneé";
      setTimeout(() => {
        modalButton.onclick = allerAuSite(4);
      }, 3000);
      break;
    case 'img5':
      modalImage.src = 'src/suika affiche.jpg';
      modalTitle.textContent = "Suika Game";
      modalDescription.textContent = "C++, SDL - Application sur le model du jeu suika";
      setTimeout(() => {
        modalButton.onclick = allerAuSite(5);
      }, 3000);
      break;
    case 'img6':
      modalImage.src = 'src/Projet Stats.png';
      modalTitle.textContent = "ProjetStats";
      modalDescription.textContent = "Python - Projet d'études sur les statistiques";
      setTimeout(() => {
        modalButton.onclick = allerAuSite(6);
      }, 3000);
      break;
    default:
      modalImage.src = '';
      modalTitle.textContent = '';
      modalDescription.textContent = '';
  }

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}



function isBottomOfPage() {
  return (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
}


window.onscroll = function() {
  if (isBottomOfPage()) {
    document.body.classList.add('noscroll');
    console.log("Scroll bloqué : bas de page atteint");
  }
};




function handleScrollControl(event) {
  event.preventDefault(); // Empêche le scroll par défaut
  if (1<=scrollState && scrollState<4){
    if (event.deltaY > 0 ) {
      scrollState++; // Scroll vers le bas → augmente
    } 
  }
  
  else{
      if (event.deltaY > 0) {
        scrollState = 1; // Scroll vers le bas → agmente
      }
      }
    
    navigateur(scrollState);
  }

function enableScrollControl() {
  document.addEventListener('wheel', handleScrollControl, { passive: false });
}

function disableScrollControl() {
  document.removeEventListener('wheel', handleScrollControl);
}

window.onscroll = function () {
  if (isBottomOfPage()) {
    document.body.classList.add('noscroll');
    enableScrollControl();
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function allerAuSite(n) {
  switch (n) {
    case 1:
      window.location.href = 'https://www.exemple.com';
      break;
    case 2:
      window.location.href = 'https://www.exemple.com';
      break;
    case 3:
      window.location.href = 'https://github.com/ByWizKi/GestioTache';
      break;
    case 4:
      window.location.href = 'https://github.com/ByWizKi/ProjetBDW';
      break;
    case 5:
      window.location.href = 'https://github.com/Sheik-info/Suika_game';
      break;
    case 6:
      window.location.href = 'https://github.com/ByWizKi/ProjetStat';
      break;
}
}