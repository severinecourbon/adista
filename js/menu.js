const open = document.querySelector(".menu")
const close = document.querySelector(".menu-hover")
const menu = document.querySelector(".drop-menu")


  open.addEventListener("click", (event) => {
    open.style.display = "none";
    close.style.display = "initial";
    menu.style.display = "initial";
  });

  close.addEventListener("click", (event) => {
    open.style.display = "initial";
    close.style.display = "none";
    menu.style.display = "none";
  });
