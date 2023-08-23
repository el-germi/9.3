const nomb = "lista";

function repaint() {
    const con = document.getElementById("contenedor");
    con.innerHTML = "";
    JSON.parse(localStorage.getItem(nomb)).forEach(e => {
        con.innerHTML += `<li>${e}</li>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem(nomb) || !Array.isArray(JSON.parse(localStorage.getItem(nomb))))
        localStorage.setItem(nomb, JSON.stringify([]));
    document.getElementById("agregar").addEventListener("click", () => {
        let aa = document.getElementById("item");
        if (aa.value.length > 0) {
            let arr = JSON.parse(localStorage.getItem(nomb));
            arr.push(aa.value);

            localStorage.setItem(nomb, JSON.stringify(arr))
            aa.value = "";
            repaint();
        }
    });
    document.getElementById("limpiar").addEventListener("click", () => {
        localStorage.setItem(nomb, JSON.stringify([]));
        repaint();
    });
});