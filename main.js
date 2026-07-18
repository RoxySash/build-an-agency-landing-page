const mobileMenu = document.getElementById("mobileMenu");
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  if(mobileMenu.style.display === "none") {
     mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
 
})
