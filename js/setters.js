// Setters pop up controlling
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-button")) {
        toogleSettersPopup();
        document.querySelector(".setters-pp").scrollTo(0, 0);
        popupItemDetails(e.target.parentElement);

    }
})
const toogleSettersPopup = () => {
    document.querySelector(".setters-pp").classList.toggle("open");
    document.body.classList.toggle("hidden-scrolling");
}
document.querySelector(".setters-btn").addEventListener("click", toogleSettersPopup)

//hide pop up when clicked out side of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("setters-pp")) {
        toogleSettersPopup();
    }
})

const popupItemDetails = (ppItems) => {
    document.querySelector(".pp-details").innerHTML =
        ppItems.querySelector(".box-items-details").innerHTML;

}