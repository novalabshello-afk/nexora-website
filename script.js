```javascript
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-btn");

if (menu) {

  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });

    });

}

document.getElementById("year").textContent =
  new Date().getFullYear();
```
