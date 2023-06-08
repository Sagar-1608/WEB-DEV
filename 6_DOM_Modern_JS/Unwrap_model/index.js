const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal()
{
    console.log('model is open');
    modal.classList.add("modalactive");
    overlay.classList.add("overlayactive");
};

function closeModal()
{
    console.log('model is close');
    modal.classList.remove("modalactive");
    overlay.classList.remove("overlayactive");

}