
let getMenuBtn = document.querySelector(".menu-icon");
let Navigationbar = document.querySelector(".Navigation-bar");

// Function to handle width check
function checkWidth() {
  if (window.innerWidth < 1300) {
    // Hide navigation bar on small screens
    Navigationbar.classList.add("hide", "xaviar");

    // Add event listener for toggle functionality
    getMenuBtn.addEventListener("click", () => {
      Navigationbar.classList.toggle("hide");
    });
  } else {
    // Show navigation bar on large screens
    Navigationbar.classList.remove("hide", "xaviar");

    // Remove event listener for toggle functionality
    getMenuBtn.removeEventListener("click", () => {
      Navigationbar.classList.toggle("hide");
    });
  }
}

// Initial check
checkWidth();

// Check on window resize
window.addEventListener("resize", checkWidth);
