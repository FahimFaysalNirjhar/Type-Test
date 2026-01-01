# ⌨️ Typing Accuracy & Speed Test

A simple web-based typing test application that measures typing speed (WPM) and accuracy by comparing user input with randomly generated text.

---

## ✨ Features

- Fetches random text using an API
- Calculates typing speed in Words Per Minute (WPM)
- Calculates accuracy and error count
- Simple UI with Start / Done control
- No external libraries required

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

---

## 📂 Project Structure

typing-test/
│
├── index.html
├── style.css
├── app.js
└── README.md

## 🚀 How to Use

1. Open `index.html` in your browser.
2. Click **Start**.
3. Type the displayed text into the textarea.
4. Click **Done** to see your result.

## 📊 How Speed Is Calculated

speed = (totalTypedWords / totalTimeInSeconds) × 60
Accuracy is calculated by comparing each typed word with the corresponding displayed word.

## 🌐 API Used

- **Meow Facts API**

https://meowfacts.herokuapp.com/?count=3

## 🔮 Future Improvements

- Add a reset button
- Add difficulty levels
- Improve mobile responsiveness
- Store best scores

## 🧑‍💻 Author

**Fahim Faysal**

---

## 📄 License

This project is open-source and free to use for learning and personal projects.
