const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendbtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// Attach Events
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target.parentNode.classList.contains("rating"));
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendbtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">❤️</p>
    <strong> Thank You! </strong>
    <br>
    <strong> Feedback : ${selectedRating} </strong>
    `;
});

// removeActive() function
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
