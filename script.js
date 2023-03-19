const pageMenu = document.querySelector('.page-menu')
const btnMenu = document.querySelector('.btn-menu')

btnMenu.addEventListener('click', () => {
    pageMenu.style.display = "block"
})

pageMenu.addEventListener('click', () => {
    pageMenu.style.display = "none"
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && pageMenu.style.display === "block")
    window.location.href = "https://www.youtube.com/watch?v=QvjUG3lF1cs"
});
