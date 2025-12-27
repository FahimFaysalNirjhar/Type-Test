const URL = "https://meowfacts.herokuapp.com/?count=3";
const para = document.querySelector("p");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (btn.innerText === "Start") {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        para.innerText = data.data;
        para.style.height = "10rem";
        para.style.overflow = "hidden";
      });
    textArea.removeAttribute("disabled");
    btn.innerText = "Done";
  } else {
    btn.innerText = "Start";
    textArea.setAttribute("disabled", "true");
  }
});
