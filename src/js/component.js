import "../css/component.css";


export const saludar = (saludo) => {
    const h1 = document.createElement("h1");
    h1.innerText = `Hola, Buenas noches ${saludo}`;

    document.body.append(h1);
} 