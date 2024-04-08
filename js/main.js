window.addEventListener("load", init);

let field;
let text;
const image = document.createElement('img');

function init() {
    field = document.getElementById('verjaar');
    text = document.getElementById('para');
    field.addEventListener('click', nextFunction);

}

function nextFunction(e) {
    if(e.target.nodeName !== "BUTTON") {
        return;
    }
    console.log(e.target.nodeName)
    if (e.target.className === "d1") {
        change1(e);
    } else if ( e.target.className === "d2") {
        change2(e);
    } else if ( e.target.className === "d3") {
        change3(e);
    } else if (e.target.className === "d4") {
        change4(e);
    }
}


function change1(e) {
    e.target.className = 'd2';
    text.innerText = 'Je hebt dus op de knop gedrukt en denkt nu vast "Wat is mijn cadeau nou?"'
        + ' Maak je maar geen zorgen!'
}


function change2(e) {
    e.target.className = 'd3';
    text.innerText = 'Je bent er bijna, nog wat verder. Alvast 1 tip: het heeft niks met een bal te maken. ';
}


function change3(e) {
    e.target.className = 'd4';
    text.innerText = 'Wij gaan naar Comic-Con!!!!';
    image.src = 'images/me-and-u.jpg';
    field.appendChild(image);
}

function change4(e) {
    e.target.className = 'd1';
    text.innerText = 'Gefeliciteerd Jan. Eindelijk 15 en nu ook nog langer dan dat ik ben.' +
        ' Voor je verjaardag heb ik iets leuks bedacht. Druk maar op de knop.'
    image.src = '';
}
