document.addEventListener("DOMContentLoaded", () => {
  let passcode = "";
  const dots = document.querySelectorAll(".dot");
  const keys = document.querySelectorAll(".key");
  const passcodeDots = document.querySelector(".passcode-dots");
  const body = document.body;

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      if (passcode.length < 4) {
        const number = key.querySelector(".number").textContent;
        passcode += number;
        dots[passcode.length - 1].classList.add("filled");
      }

      if (passcode.length === 4) {
        if (passcode !== "2021") {
          passcodeDots.classList.add("shake");
          setTimeout(() => {
            passcodeDots.classList.remove("shake");
            passcode = "";
            dots.forEach((dot) => dot.classList.remove("filled"));
          }, 500);
        } else {
          setTimeout(() => {
            window.location.href = "valentine.html";
          }, 1000);
        }
      }
    });
  });
});
