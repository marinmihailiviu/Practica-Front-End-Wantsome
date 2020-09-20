const buttonEventHandler = () => {
    alert("Ai apasat pe buton.");
}

const textInputEventHandler = () => {
    alert("Textul din input a fost schimbat");
}

const cameleonEventHandler = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const myParagraf = document.getElementById("myParagraf");
    myParagraf.style.color = `#${randomColor}`;
}

window.addEventListener("keydown", cameleonEventHandler);