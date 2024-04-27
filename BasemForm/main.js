document.addEventListener("DOMContentLoaded", onLoad)

var submitButton = document.getElementById("submitButton")
var nextButton = document.getElementById("nextButton")
var previousButton = document.getElementById("previousButton")
var tabs = []
var currentTab = 0;
var pageNumberSpan = document.getElementById("pageNumberSpan")

submitButton.addEventListener("click", goNext);
nextButton.addEventListener("click", goNext)
previousButton.addEventListener("click", goBack)

function goNext(e) {
    if (currentTab == 3) return
    currentTab++;
    if (currentTab == 3) {
        submitButton.innerText = "Submit"
    }
    show(currentTab)
    pageNumberSpan.innerText = currentTab + 1
}

function goBack(e) {
    if (currentTab == 0) return
    currentTab--;
    if (currentTab < 3) {
        submitButton.innerText = "Next"
    }
    show(currentTab)
    pageNumberSpan.innerText = currentTab + 1
}

function show(index) {
    tabs.forEach(element => {
        element.classList.add("d-none")
    });
    tabs[index].classList.remove("d-none")
    tabs[index].classList.add("d-block")
}

function onLoad(param) {
    tabs = Array.from(document.getElementsByClassName("tab"))
    show(currentTab)
}