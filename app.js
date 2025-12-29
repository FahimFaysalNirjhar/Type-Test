const URL = "https://meowfacts.herokuapp.com/?count=3";
const para = document.querySelector("p");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
let startTime, endTime;

const wordCounter = () => {
  let word = textArea.value.trim();
  let Count = word.split(/[\s.,!?;:]+/).length;
  console.log(Count);
  return Count;
};

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
        textArea.removeAttribute("disabled");
        btn.innerText = "Done";
        textArea.addEventListener("focus", () => {
          let time = new Date();
          startTime = time.getTime();
          console.log(startTime);
        });
      });
  } else {
    btn.innerText = "Start";
    textArea.setAttribute("disabled", "true");
    let time = new Date();
    endTime = time.getTime();
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
    let wordCount = wordCounter();
  }
});
