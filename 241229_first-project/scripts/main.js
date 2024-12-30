// Adding a image changer
const catImage = document.querySelector("img");
catImage.addEventListener("click", () => {
    const mySrc = catImage.getAttribute("src");
    if (mySrc === "images/cat-001.jpg") {
        catImage.setAttribute("src", "images/cat-002.jpg");
    } else {
        catImage.setAttribute("src", "images/cat-001.jpg");
    }
});

// Adding a personalized welcome message
// Declare the button name
let myButton = document.querySelector("button");
let  myHeading = document.querySelector("h1");

// Set greeting
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to Cat's World, ${myName}`;
    }
}

//Initialization Code
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Cat's World, ${storedName}`;
}

// Add click event handler
myButton.addEventListener("click", () => {
    setUserName();
});

//Delete localStorage
// const clearButton = document.querySelector("#clearLocalStorage");

// clearButton.addEventListener("click", () => {
//     localStorage.removeItem("name");
//     myHeading.textContent = "Welcome to Cat's World!";
//     alert("Name cleared from localStorage.");
// });