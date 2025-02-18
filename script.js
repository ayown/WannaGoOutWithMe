document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("noButton");
  const yesButton = document.getElementById("yesButton");
  const gif = document.querySelector(".gif_container img");
  let size = 100; // Initial size of the GIF in percentage

  yesButton.addEventListener("click", function () {
    window.location.href = "yes.html"; // Redirect to yes.html
  });

  function moveButton() {
    if (size < 300) {
      // Set a max size limit
      size += 20;
      gif.style.width = size + "%";
      gif.style.height = "auto";
    }

    // Randomly move the 'No' button
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
  }

  window.moveButton = moveButton;
  window.nextPage = function () {
    window.location.href = "yes.html";
  };
});
