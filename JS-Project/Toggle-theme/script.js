const btn = document.querySelector(".toggle-theme");
console.log(btn);
const body = document.body;

const Toggletheme = () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        btn.textContent = "Dark-Mode";
    } else{
        body.classList.add("dark-mode");
        btn.textContent = "Light-Mode";
    }
}

btn.addEventListener("click", Toggletheme);
