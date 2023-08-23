const cookie = "lista";

function repaint() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    JSON.parse(localStorage.getItem(cookie)).forEach(e => {
        contenedor.innerHTML += `<li>${e}</li>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem(cookie) || !Array.isArray(JSON.parse(localStorage.getItem(cookie))))
        localStorage.setItem(cookie, JSON.stringify([]));

    document.getElementById("agregar").addEventListener("click", () => {
        let item = document.getElementById("item");
        if (item.value.length > 0) {
            let arr = JSON.parse(localStorage.getItem(cookie));
            arr.push(item.value);

            localStorage.setItem(cookie, JSON.stringify(arr))
            item.value = "";
            repaint();
        }
    });

    document.getElementById("limpiar").addEventListener("click", () => {
        localStorage.setItem(cookie, JSON.stringify([]));
        repaint();
    });
});